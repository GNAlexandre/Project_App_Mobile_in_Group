import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "./Screens/LoginPage";
import LandingPage from "./Screens/LandingPage";
import RegisterPage from "./Screens/RegisterPage";
import GameSelectionPage from "./Screens/GameSelectionPage";
import TicTacToeGamePage from "./Screens/TicTacToeGamePage";
import ProfilePage from "./Screens/ProfilePage";
import RankingPage  from "./Screens/RankingPage";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingPage}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Register" component={RegisterPage}/>
        <Stack.Screen name="GameSelection" component={GameSelectionPage}/>
        <Stack.Screen name="Game" component={TicTacToeGamePage}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage}/>
        <Stack.Screen name="RankingPage" component={RankingPage}/>

    </Stack.Navigator>
    </NavigationContainer>

  );
}
const  App= ()=> {
    return (
        <MyStack/>
    );
}

export default App;
