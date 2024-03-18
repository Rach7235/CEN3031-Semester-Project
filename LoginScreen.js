import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.textStyle}>Login Screen</Text>
        <TextInput
          style = {styles.input}
          placeholder = 'username'
        />
        <TextInput
          style = {styles.input}
          placeholder = 'password'
        />
        <Button
          title = 'Login'
          onPress = {() => navigation.navigate("Journal")}
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

