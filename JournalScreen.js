import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';

const JournalScreen = () => {

  return (
    <SafeAreaView style = {styles.container}>
      <TextInput
          style = {styles.input}
        />
        <View style = {styles.space}
        />
          <Button
            title = 'Mood Tracking'
          />
    </SafeAreaView>
  )
}

export default JournalScreen
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