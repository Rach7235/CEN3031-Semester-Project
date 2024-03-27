mport "react-native-gesture-handler";
import React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import JournalScreen from './screens/JournalScreen';
import DataScreen from './screens/DataScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StackNav=() => {
    const Stack =  createNativeStackNavigator(); 
    return (
        <Stack.Navigator>
             <Stack.Screen name="Home" component={HomeScreen}/>   
            </Stack.Navigator>
    )
}

// Screens in home screen after logging in
const DrawerNav=()=>{
    const Drawer=createDrawerNavigator();
    return (
    <Drawer.Navigator>
    <Drawer.Screen name= "Home" component={StackNav}/>
    <Drawer.Screen name= "Journal" component={JournalScreen}/>
    <Drawer.Screen name = "Data" component={DataScreen}/>
    </Drawer.Navigator>
    )
}
function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    async function getData() {
        const data = await AsyncStorage.getItem('isLoggedIn')
        setisLoggedIn(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const Stack =  createNativeStackNavigator(); 

    return (  
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= "Login" component={LoginScreen}
            options={{
                headerStyle: {
                fontWeight: 'bold',
                textAlign:"center",
                flex:1,
            }
        }}
                />
            <Stack.Screen name= "Register" component = {RegisterScreen}/>
            <Stack.Screen name="Home" component={DrawerNav}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
    
}export default App;

