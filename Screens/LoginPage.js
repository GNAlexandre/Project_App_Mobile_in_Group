import React, {useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import AppButton from "../components/Button";
import AppTextInput from "../components/TextInput";
import { loginWithEmail } from '../components/Auth/AuthentificationTools';
import Background from "../components/Background";

function LoginPage ({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Background>
                <View style={styles.container}>
                    <Image source={require("../assets/Design-Studio-2024-05-05.png")} style={styles.image}/>
                    <AppTextInput placeholder="Email" icon="email"  onChangeText={setEmail} value={email}/>
                    <AppTextInput placeholder="Password" icon="lock" onChangeText={setPassword} secureTextEntry={true} value={password} />
                    <AppButton title="Login"  onPress={() => loginWithEmail(email, password,navigation)}/>
                </View>
            </Background>
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
        alignSelf: "center",
        borderRadius: 100,
        marginBottom: 20,
    },
});

export default LoginPage;