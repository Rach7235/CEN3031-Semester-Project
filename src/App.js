import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JournalScreen from './screens/JournalScreen';
import LoginScreen from './screens/LoginScreen';
import DataScreen from './screens/DataScreen';




const Stack =  createNativeStackNavigator()

export default function App() {

    return (  
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name = "Login" component = {LoginScreen}/>
            <Stack.Screen name = "Journal" component = {JournalScreen} />
            <Stack.Screen name = "Data" component = {DataScreen}/>        
            </Stack.Navigator>
        </NavigationContainer>
    );
}
