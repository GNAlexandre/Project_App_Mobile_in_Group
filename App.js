import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import LoginPage from './Screens/LoginPage'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>

            </Stack.Navigator>
        </NavigationContainer>

    );
}






const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 100,
        marginBottom: 250,

    },
});
