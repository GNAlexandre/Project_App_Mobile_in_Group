import React from "react";
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import AppButton from "../components/Button";
import Background from "../components/Background";



function LandingPage ({navigation}) {
    return (
        <>
            <Background>
                <View style={styles.container}>
                    <Image source={require("../assets/Design-Studio-2024-05-05.png")} style={styles.image}/>
                    <AppButton title="Login" color="primary" onPress={() => navigation.navigate('Login')}/>
                    <AppButton title="Register" color="secondary" onPress={() => navigation.navigate('Register')}/>
                </View>
            </Background>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: "center",
        borderRadius: 100,
        marginBottom: 50,

    },
})
export default LandingPage;