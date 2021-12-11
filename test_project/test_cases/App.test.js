var expect = require('chai').expect;

describe('Simple App testing', () => {

  beforeEach(async  () => {
    await ( await $("~app-root")).waitForDisplayed(20000 , false)
  });

  it('Valid Login Test', async () => {
    await (await $('~username')).setValue("suhail");
    await (await $('~password')).setValue("123456");
    
    const el = await $('~login')
    await el.click()

    await ( await $("~loginstatus")).waitForDisplayed(20000)

    const status = await (await $("~loginstatus")).getText();
    expect(status).to.equal('success');
  });

  it('Invalid Login Test', async () => {
    await (await $('~username')).setValue("inavlid");
    await (await $('~password')).setValue("12345");

    await (await $("~login")).click();

    await (await $("~loginstatus")).waitForDisplayed(20000)
    const status = await (await $("~loginstatus")).getText();
    expect(status).to.equal('fail');
  });

});
