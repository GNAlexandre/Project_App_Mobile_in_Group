import React, {useState} from "react";
import {StyleSheet, View, ScrollView, Image} from "react-native";
import AppButton from "../components/Button";
import Text from "../components/Text";
import AppTextInput from "../components/TextInput";
import {addDoc, collection} from "firebase/firestore";
import db from "../config/FireBaseConfiguration";
import firebaseui from "firebase/compat";
import { registerWithEmail} from '../components/Auth/Authentification';


function RegisterPage({navigation}) {
  const [name, setName] = useState(); // [state, setState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();
  const [telephone, setTelephone] = useState();

    const VerifyPassword = () => {
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return false;
        }
        else {
            addDocFunction();
        }
    }

    const addDocFunction = async () => {
        try {
            const docRef = await addDoc(collection(db, "Utilisateurs"), {
                Nom: name,
                Email: email,
                Password: password,
                Telephone: telephone,

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        //clear les champs
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTelephone("");

        //renvoie à la page de connexion
        navigation.navigate("LoginPage");
    }

    /*
    var firebase = require('firebase');
    var firebaseui = require('firebaseui');

    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // Other config options...
    });
    */
  return (
      <View style={styles.container}>
          <Image source={require("../assets/Design-Studio-2024-05-05.png")} style={styles.image}/>
        <Text style={styles.title}>Register Page</Text>

        <ScrollView>


        <AppTextInput placeholder="Name" icon="account" onChangeText={text => setName(text)} value={name}/>
        <AppTextInput placeholder="Email" icon="email"  onChangeText={setEmail} value={email}/>
        <AppTextInput placeholder="Password" icon="lock" onChangeText={setPassword} secureTextEntry={true} value={password} />
        <AppTextInput placeholder="Confirm Password" icon="lock" onChangeText={text => setConfirmPassword(text)} value={confirmPassword} secureTextEntry/>
        <AppTextInput placeholder="Telephone" icon="phone" onChangeText={text => setTelephone(text)} value={telephone}/>


        </ScrollView>

        <AppButton title="Register" onPress={() => registerWithEmail(email, password, navigation, name)} />


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
    image: {
        width: 150,
        height: 150,
        //centrer l'image
        alignSelf: "center",
        //arrondir l'image
        borderRadius: 100,
        marginBottom: 50,

    },


});

export default RegisterPage;