import { StyleSheet, Text, View, TextInput, SafeAreaView, Button} from 'react-native';
import React, { useMemo, useState } from 'react';
import RadioButton from 'react-native-radio-buttons-group';


const JournalScreen = ({navigation}) => {
    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'Very sad',
        },
        {
            id: '2',
            label: 'Sad',
        },
        {
            id: '3', 
            label: 'Neutral',
        },
        {
            id: '4', 
            label: 'Happy',
        },
        {
            id: '5', 
            label: 'Very Happy',
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
        <Text>How are you feeling today?</Text>
         <RadioButton
            radioButtons={radioButtons} 
            onPress={setSelectedId} 
            selectedId={selectedId}
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