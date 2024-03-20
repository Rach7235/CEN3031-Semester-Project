import { StyleSheet, Text, View, TextInput, SafeAreaView, Button} from 'react-native';
import React from 'react';

const RegisterScreen = ({navigation}) => {

  return (
    <SafeAreaView style = {styles.container}>
        <Text>Register Screen</Text>
        <TextInput
          style = {styles.input}
          placeholder = 'Full Name'
        />
       
         <TextInput
          style = {styles.input}
          placeholder = 'Username'
        />
         <TextInput
          style = {styles.input}
          placeholder = 'Password'
        />
        <Button
            title = 'Sign Up'
        />
    </SafeAreaView>
  )
}

export default RegisterScreen

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