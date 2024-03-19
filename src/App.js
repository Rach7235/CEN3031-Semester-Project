import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import JournalScreen from './screens/JournalScreen';
import LoginScreen from './screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack =  createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = 'Login'
                    component = {LoginScreen}
                />
                <Stack.Screen
                    name = 'Journal'
                    component = {JournalScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
