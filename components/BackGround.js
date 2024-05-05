// Background.js
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children }) => {
    return (
        <ImageBackground source={require('../assets/Fond Ecran.jpg')} style={styles.background}>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Ajuste la taille de l'image pour couvrir l'ensemble de l'écran
        justifyContent: 'center',
    },
});

export default Background;
