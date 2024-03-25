import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import { TouchableOpacity } from "react-native";


const LoginScreen = (props) => { const {navigation} = props;
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

function handleSubmit(){
  console.log(name, password)
  const userData = {
    id: name,
    password: password,
  }
  axios.post("http://192.168.254.28:8001/login", userData).then(res =>  {
  console.log(res.data);
  // If user exists in database, login was successful
  if (res.data.status=="ok") {
    Alert.alert("Log in successful!")
    navigation.navigate('Home')
  }
  else {
    // Login did not work
    Alert.alert("Login Unsuccessful. Try again");
  }
})
}
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.textStyle}>Login Screen</Text>
        <TextInput
          style = {styles.input}
          placeholder = 'username'
          onChange = {e => setName(e.nativeEvent.text)}
        />
        <TextInput
          style = {styles.input}
          placeholder = 'password'
          onChange= {e => setPassword(e.nativeEvent.text)}
          secureTextEntry = {showPassword}
        />
         <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {password.length < 1 ? null : !showPassword ? (
        <Feather
          name = "eye-off"
          style = {{marginRight: -10}}
          color={'green'}
          size={23}
        />
          ) : (
          <Feather
            name = "eye"
            style =  {{marginRight: -10}}
            color={'green'}
            size={23}
          />)
}
        </TouchableOpacity>
        <Button
          title = 'Login'
          onPress = {() => handleSubmit()}
        />
        <View
          style = {styles.space}
        />
        <Button
          title = 'Register'
          color = 'green'
          onPress = {() => navigation.navigate("Register")}
        />
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
  },
  space: {
    width:25,
    height:25,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 300,
  },
});

