import React, {useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import AppButton from "../components/Button";
import Text from "../components/Text";
import AppForm from "../components/forms/Form";
import AppTextInput from "../components/TextInput";
import { loginWithEmail } from '../components/Auth/Authentification';



import db from '../config/FireBaseConfiguration';

function LoginPage ({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
        <View style={styles.container}>
            <Image source={require("../assets/Design-Studio-2024-05-05.png")} style={styles.image}/>

            <Text style={styles.title}>Page de Connexion</Text>


            <AppTextInput placeholder="Email" icon="email"  onChangeText={setEmail} value={email}/>
            <AppTextInput placeholder="Password" icon="lock" onChangeText={setPassword} secureTextEntry={true} value={password} />

            <AppButton title="Login"  onPress={() => loginWithEmail(email, password,navigation)}/>

            {/* <AppButton title="Login" onPress={() => navigation.navigate("GameSelection")}/> */}


        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
    },
    image: {
        width: 150,
        height: 150,
        //centrer l'image
        alignSelf: "center",
        //arrondir l'image
        borderRadius: 100,

    },
});

export default LoginPage;