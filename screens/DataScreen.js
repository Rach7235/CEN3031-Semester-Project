import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, ScrollView} from 'react-native';
import React, { Component } from 'react';

const DataScreen = () => {

  return (
    <Text>See your data insights!</Text>
  )
}

export default DataScreen

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
