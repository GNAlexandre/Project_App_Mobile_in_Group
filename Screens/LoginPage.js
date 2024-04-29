import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
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
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>


            <AppTextInput placeholder="Email" icon="email"  onChangeText={setEmail} value={email}/>
            <AppTextInput placeholder="Password" icon="lock" onChangeText={setPassword} secureTextEntry={true} value={password} />

            <AppButton title="Login"  onPress={() => loginWithEmail(email, password,navigation)}/>

            {/* <AppButton title="Login" onPress={() => navigation.navigate("GameSelection")}/> */}


        </View>
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
});

export default LoginPage;