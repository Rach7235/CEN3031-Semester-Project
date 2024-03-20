import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import JournalScreen from './screens/JournalScreen';
import DataScreen from './screens/DataScreen';





const Stack =  createNativeStackNavigator()
const Drawer =  createDrawerNavigator()

export default function App() {

    return (  
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name = "Login" component = {LoginScreen}/>
                <Drawer.Screen name = "Register" component = {RegisterScreen}/>
                <Drawer.Screen name = "Journal" component = {JournalScreen}/>
                <Drawer.Screen name = "Data" component = {DataScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
