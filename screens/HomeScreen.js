import {Alert, StyleSheet, Text, View, TextInput, SafeAreaView, Button, ScrollView} from 'react-native';
import React, { Component, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => { const {navigation} = props; 
    const [userData, setUserData] = useState('');
    async function getData() {
        const token = AsyncStorage.getItem('token');
        console.log(token);
        axios.post("http://192.168.254.28:8001/userdata", {token:token})
        .then(res=> {
            console.log(res.data);
            setUserData(res.data.data);
        })
    }
       
    
    
    useEffect(() => {
        getData();
    }, []);
    
function signOut() {
    AsyncStorage.setItem('isLoggedIn','');
    AsyncStorage.setItem('token', '');
  // Need to change this to keep user logged in
    navigation.navigate("Login");
    Alert.alert("Sign out successful!")
}

  return (
    <SafeAreaView style = {styles.container}>
    <Text>Welcome!</Text>
    <View style={styles.space}/>
    <Button 
    title = 'Sign Out'
    onPress={() => signOut()}
    />
    </SafeAreaView>
  )

}


export default HomeScreen

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
  },
  space: {
    width:290,
    height:290,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: 340,
    height:340
  },
});
