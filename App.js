import {NavigationContainer } from '@react-navigation/native';
<<<<<<< Updated upstream
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Screens/HomeScreen";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from "./Screens/LoginPage";
import LandingPage from "./Screens/LandingPage";
import RegisterPage from "./Screens/RegisterPage";
import GameSelectionPage from "./Screens/GameSelectionPage";
import GamePage from "./Screens/GamePage";
import GameSettingsPage from "./Screens/GameSettingsPage";
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Landing" component={LandingPage}/>
                <Stack.Screen name="Login" component={LoginPage}/>
                <Stack.Screen name="Register" component={RegisterPage}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="GameSelection" component={GameSelectionPage}/>
                <Stack.Screen name="Game" component={GamePage}/>
                <Stack.Screen name="GameSettings" component={GameSettingsPage}/>


            </Stack.Navigator>
        </NavigationContainer>
    );
=======
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
//import LoginPage from './Screens/LoginPage'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
    </NavigationContainer>

  );
>>>>>>> Stashed changes
}
const  App= ()=> {

    return (

        <MyStack/>


    );
}

export default App;
