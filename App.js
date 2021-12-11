import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isLogined: false
    }
  }

  inputChangeHandler = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  login = () => {
    if ((this.state.username == 'suhail') && (this.state.password == '123456')) {
      this.setState({ isLogined: true });
    }
    else {
      this.setState({ isLogined: false });
    }
  }

  render() {
    return (
      <View style={LOCAL_STYLES.wrapper} testID="app-root" accessibilityLabel="app-root">
        <Text style={LOCAL_STYLES.textlogin}>Login</Text>
        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput name="username" accessibilityLabel="username" placeholder='User Name' style={LOCAL_STYLES.input} onChangeText={(text) => this.inputChangeHandler(text, "username")} />
        </View>
        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput placeholder="Password" name="password" accessibilityLabel="password" secureTextEntry={true} style={LOCAL_STYLES.input} onChangeText={(text) => this.inputChangeHandler(text, "password")} />
        </View>
        <TouchableHighlight style={LOCAL_STYLES.buttonContainer} accessibilityLabel="login" onPress={this.login}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableHighlight>
          <Text>Login Status : </Text>
          <Text  accessibilityLabel="loginstatus">{this.state.isLogined ? "success" : "fail"}</Text>
      </View>
    );
  }
}

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1
  },
  input:{
    width:'100%',
    paddingHorizontal:8
  },
  buttonContainer: {
    height: 45,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#00b5ec"
  },
  textlogin:{
    fontSize:18,
    marginBottom:8,
  }
});