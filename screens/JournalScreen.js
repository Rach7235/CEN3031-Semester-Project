import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert} from 'react-native';
import React, { useMemo, useState, useEffect} from 'react';
import RadioButton from 'react-native-radio-buttons-group';
import axios from 'axios';




const JournalScreen = ({navigation}) => {
  const [entry, setEntry] = useState('');
  var dateVariable = Date().toLocaleString();

  function handleEntry(e) {
    const entryVar=e.nativeEvent.text;
    setEntry(entryVar);
  }
  function handleSave() {
    const journalData = {
      id: 'test',
      date: dateVariable,
      entry: entry,
    }
      axios.post("http://192.168.254.28:8001/journal", journalData).
      then(res => {
        console.log(res.data);
        if (res.data.status =="ok") {
           // Journal entry successfully created
          Alert.alert("Journal Entry Created!");
        }
      })
      .catch(e => console.log(e));
      }
    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'Very Sad',
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

    


  
  return (
    <SafeAreaView style = {styles.container}>
      <TextInput
          style = {styles.input}
          onChange={e => handleEntry(e)}
        />
        <View style = {styles.space}
        />
        <Text>How are you feeling today?</Text>
         <RadioButton
            radioButtons={radioButtons} 
            //onPress={setSelectedId} 
            //selectedId={selectedId}
        />
        <Button
          title = 'Save'
          onPress={() => handleSave()}
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
    textAlignVertical:'top',
    borderWidth: 2,
    borderColor: 'black',
    width: 340,
    height:340
    
  },
  
});
