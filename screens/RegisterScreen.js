import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert} from 'react-native';
import axios from 'axios';
import React, { useMemo, useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native";


const RegisterScreen = (props) => { const {navigation} = props;
    const [name, setName] = useState('');
    const [nameVerify, setnameVerify] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit() {
      const userData = {
        id: name,
        password: password,
      }
      if (nameVerify && passwordVerify) {
        axios.post("http://192.168.254.28:8001/register", userData)
        .then(res => {console.log(res.data)
        if (res.data.status =="ok") {
          // If user is created, registration is successful
          Alert.alert("Registration Successful!");
          navigation.navigate("Login");
        } else {
          Alert.alert(JSON.stringify(res.data));
        }
        })
        .catch(e => console.log(e));
      }
      else {
        Alert.alert("Please fill in mandatory details");
      }
          
          }
    function handleName(e) {
      const nameVar=e.nativeEvent.text;
      setName(nameVar);
      setnameVerify(false);
      // ID/Name needs to have more than 1 character
      if (nameVar.length > 1) {
        setnameVerify(true);
      }
  }
  
  function handlePassword(e) {
      const passwordVar = e.nativeEvent.text;
      setPassword(passwordVar);
      setPasswordVerify(false);
      // Allow uppercase, lowercase, and 6 or more characters
      if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
          setPassword(passwordVar);
          setPasswordVerify(true);
      }
  }

      
  return (
    <SafeAreaView style = {styles.container}
    keyboardShouldPersistTaps={true}>
        <Text>Register Screen</Text>
        <TextInput
          style = {styles.input}
          placeholder = 'Username'
          onChange={e => handleName(e)}
        />
      {name.length < 1 ? null: nameVerify ? (
        <Feather name = "check-circle" color = "green" size = {20} />
      ): (<Feather name="x" color="red" size={20} />)}
      {name.length < 1 ? null : nameVerify ? null : (
        <Text
          style = {{
            marginLeft: 20,
            color: 'red',
          }}>
          Username should be more than 1 character.
          </Text>
      )}
         <TextInput
          style = {styles.input}
          placeholder = 'Password'
          onChange={e => handlePassword(e)}
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
          />)}
  </TouchableOpacity>
  {password.length < 1 ? null : passwordVerify ? null: (
    <Text
      style = {{
            marginLeft: 20,
            color: 'red',
          }}>
          Uppercase, Lowercase, Number, and 6 or more characters.
    </Text>
  )}
        <Button
            title = 'Sign Up'
            onPress={() => handleSubmit()}
        />
         </SafeAreaView>
  )
}


export default RegisterScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
  },
  space: {
    width:20,
    height:20,
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
