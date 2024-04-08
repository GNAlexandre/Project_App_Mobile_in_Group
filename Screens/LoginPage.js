import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import AppButton from "../components/Button";
import Text from "../components/Text";
import AppForm from "../components/forms/Form";
import AppTextInput from "../components/TextInput";



function LoginPage() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>


            <AppTextInput placeholder="Email" icon="email" onChangeText={text => setEmail(text)} value={email}/>
            <AppTextInput placeholder="Password" icon="lock" onChangeText={text => setPassword(text)} value={password} secureTextEntry/>

            <AppButton title="Login" onPress={() => console.log(email, password)}/>



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