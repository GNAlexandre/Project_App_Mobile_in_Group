import React, {useState} from "react";
import {StyleSheet, View, ScrollView} from "react-native";
import AppButton from "../components/Button";
import Text from "../components/Text";
import AppTextInput from "../components/TextInput";
import {addDoc, collection} from "firebase/firestore";
import db from "../config/FireBaseConfiguration";
import firebaseui from "firebase/compat";


function RegisterPage({navigation}) {
  const [name, setName] = useState(); // [state, setState
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  //adresse
    const [adresse, setAdresse] = useState();
    const [ville, setVille] = useState();
    const [codePostal, setCodePostal] = useState();
    const [pays, setPays] = useState();
    const [telephone, setTelephone] = useState();
    const [dateNaissance, setDateNaissance] = useState();

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
                Adresse: adresse,
                Ville: ville,
                CodePostal: codePostal,
                Pays: pays,
                Telephone: telephone,
                DateNaissance: dateNaissance,
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
        setAdresse("");
        setVille("");
        setCodePostal("");
        setPays("");
        setTelephone("");
        setDateNaissance("");

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
        <Text style={styles.title}>Register Page</Text>

        <ScrollView>


        <AppTextInput placeholder="Name" icon="account" onChangeText={text => setName(text)} value={name}/>
        <AppTextInput placeholder="Email" icon="email" onChangeText={text => setEmail(text)} value={email}/>
        <AppTextInput placeholder="Password" icon="lock" onChangeText={text => setPassword(text)} value={password} secureTextEntry/>
        <AppTextInput placeholder="Confirm Password" icon="lock" onChangeText={text => setConfirmPassword(text)} value={confirmPassword} secureTextEntry/>
        <AppTextInput placeholder="Adresse" icon="home" onChangeText={text => setAdresse(text)} value={adresse}/>
        <AppTextInput placeholder="Ville" icon="city" onChangeText={text => setVille(text)} value={ville}/>
        <AppTextInput placeholder="Code Postal" icon="numeric" onChangeText={text => setCodePostal(text)} value={codePostal}/>
        <AppTextInput placeholder="Pays" icon="earth" onChangeText={text => setPays(text)} value={pays}/>
        <AppTextInput placeholder="Telephone" icon="phone" onChangeText={text => setTelephone(text)} value={telephone}/>
        <AppTextInput placeholder="Date de Naissance" icon="calendar" onChangeText={text => setDateNaissance(text)} value={dateNaissance}/>

        </ScrollView>

        <AppButton title="Register" onPress={() =>VerifyPassword()}/>



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

export default RegisterPage;