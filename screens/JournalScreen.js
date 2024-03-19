import { StyleSheet, Text, View, TextInput, SafeAreaView, Button} from 'react-native';
import React, { useMemo, useState } from 'react';
import RadioButton from 'react-native-radio-buttons-group';


const JournalScreen = ({navigation}) => {
    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'Strongly Disagree',
        },
        {
            id: '2',
            label: 'Disagree',
        },
        {
            id: '3', 
            label: 'Neutral',
        },
        {
            id: '4', 
            label: 'Agree',
        },
        {
            id: '5', 
            label: 'Strongly Agree',
        },
    ]), []);

    const radioButtons1 = useMemo(() => ([
        {
            id: '6', 
            label: 'Strongly Disagree',
        },
        {
            id: '7',
            label: 'Disagree',
        },
        {
            id: '8', 
            label: 'Neutral',
        },
        {
            id: '9', 
            label: 'Agree',
        },
        {
            id: '10', 
            label: 'Strongly Agree',
        },
    ]), []);

    
    const radioButtons2 = useMemo(() => ([
        {
            id: '11', 
            label: 'Strongly Disagree',
        },
        {
            id: '12',
            label: 'Disagree',
        },
        {
            id: '13', 
            label: 'Neutral',
        },
        {
            id: '14', 
            label: 'Agree',
        },
        {
            id: '15', 
            label: 'Strongly Agree',
        },
    ]), []);


    const [selectedId, setSelectedId] = useState();

  return (
    <SafeAreaView style = {styles.container}>
      <TextInput
          style = {styles.input}
        />
        <View style = {styles.space}
        />
        <Text>Today I was happy</Text>
         <RadioButton
            radioButtons={radioButtons} 
            onPress={setSelectedId} 
            selectedId={selectedId}
            layout = 'row'
        />
        <View style = {styles.space2}
        />
        <Text>Today I was upset</Text>
         <RadioButton 
            radioButtons={radioButtons1} 
            onPress={setSelectedId} 
            selectedId={selectedId}
            layout = 'row'
        />
        <View style = {styles.space2}
        />
        <Text>Today I was angry</Text>
         <RadioButton 
            radioButtons={radioButtons2} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout = 'row'  
        />
        <View style = {styles.space}
        />
          <Button
            title = 'Mood Tracking'
            onPress = {() => navigation.navigate('Data')}
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
    width:40,
    height:40,
  },
  space2: {
    width:10,
    height:10,
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
