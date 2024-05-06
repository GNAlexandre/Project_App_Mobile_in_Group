import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Alert } from "react-native";
import AppButton from "../components/Button";
import AppTextInput from "../components/TextInput";
import { registerWithEmail } from '../components/Auth/AuthentificationTools';
import Background from "../components/Background";

function RegisterPage({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            Alert.alert("Password mismatch", "The passwords do not match. Please make sure your passwords match.");
            return;
        }
        registerWithEmail(email, password, navigation, name, telephone);
    };

    return (
        <Background>
            <View style={styles.container}>
                <Image source={require("../assets/Design-Studio-2024-05-05.png")} style={styles.image} />
                <ScrollView>
                    <AppTextInput placeholder="Name" icon="account" onChangeText={text => setName(text)} value={name} />
                    <AppTextInput placeholder="Email" icon="email" onChangeText={setEmail} value={email} />
                    <AppTextInput placeholder="Password" icon="lock" onChangeText={setPassword} secureTextEntry={true} value={password} />
                    <AppTextInput placeholder="Confirm Password" icon="lock" onChangeText={text => setConfirmPassword(text)} value={confirmPassword} secureTextEntry />
                    <AppTextInput placeholder="Telephone" icon="phone" onChangeText={text => setTelephone(text)} value={telephone} />
                </ScrollView>
                <AppButton title="Register" onPress={handleRegister} />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: "center",
        borderRadius: 100,
        marginBottom: 50,
    },
});

export default RegisterPage;
