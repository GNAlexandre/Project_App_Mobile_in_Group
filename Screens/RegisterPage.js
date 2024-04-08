import React, {useState} from "react";
import {StyleSheet, View, ScrollView} from "react-native";
import AppButton from "../components/Button";
import Text from "../components/Text";
import AppForm from "../components/forms/Form";
import AppTextInput from "../components/TextInput";



function RegisterPage() {
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

        <AppButton title="Register" onPress={() => console.log({name, email, password, confirmPassword, adresse, ville, codePostal, pays, telephone, dateNaissance})}/>



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