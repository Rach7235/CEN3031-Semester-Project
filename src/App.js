import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import JournalScreen from './screens/JournalScreen';
import DataScreen from './screens/DataScreen';

const StackNav=() => {
    const Stack =  createNativeStackNavigator(); 
    return (
        <Stack.Navigator>
            <Stack.Screen name= "Login" component={LoginScreen}/>
            <Stack.Screen name= "Register" component = {RegisterScreen}/>
            <Stack.Screen name="Home" component={DrawerNav}/>
            </Stack.Navigator>
            
    )
}

const DrawerNav=()=>{
    const Drawer=createDrawerNavigator();
    return (
    <Drawer.Navigator>
    <Drawer.Screen name= "Home" component={StackNav}/>
    <Drawer.Screen name= "Journal" component={JournalScreen}/>
    </Drawer.Navigator>
    )
}
function App() {

    return (  
        <NavigationContainer>
        <DrawerNav/>
        </NavigationContainer>
    );
    
}export default App;
