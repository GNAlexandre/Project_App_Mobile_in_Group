import React from "react";
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import AppButton from "../components/Button";



// Les boutons renvoi vers les pages de login et register
function LandingPage ({navigation}) {
    return (
        <>



        <View style={styles.container}>
            <Image source={require("../assets/Design-Studio-2024-05-05.png")} style={styles.image}/>
            <AppButton title="Login" color="primary" onPress={() => navigation.navigate('Login')}/>
            <AppButton title="Register" color="secondary" onPress={() => navigation.navigate('Register')}/>

        </View>

        </>
    )
}
/*  <AppButton title="HomeScreen" color="secondary" onPress={() => navigation.navigate('Home')}/>
    <AppButton title="TicTacToe" color="secondary" onPress={() => navigation.navigate('Game')}/>

*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 150,
        height: 150,
        //centrer l'image
        alignSelf: "center",
        //arrondir l'image
        borderRadius: 100,
        marginBottom: 50,

    },
})
export default LandingPage;