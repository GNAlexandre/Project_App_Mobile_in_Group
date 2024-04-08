import React from "react";
import {StyleSheet, View} from "react-native";
import AppButton from "../components/Button";



// Les boutons renvoi vers les pages de login et register
function LandingPage ({navigation}) {
    return (
        <View style={styles.container}>
            <AppButton title="Login" color="primary" onPress={() => navigation.navigate('Login')}/>
            <AppButton title="Register" color="secondary" onPress={() => navigation.navigate('Register')}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default LandingPage;