import React, {useState} from "react";
import {StyleSheet, View, ScrollView, Image} from "react-native";
import AppButton from "../components/Button";
import Text from "../components/Text";
import AppTextInput from "../components/TextInput";
import { registerWithEmail} from '../components/Auth/Authentification';
import Background from "../components/BackGround";


function RegisterPage({navigation}) {
  const [name, setName] = useState(); // [state, setState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();
  const [telephone, setTelephone] = useState();

  return (
      <Background>
          <View style={styles.container}>
              <Image source={require("../assets/Design-Studio-2024-05-05.png")} style={styles.image}/>


            <ScrollView>


            <AppTextInput placeholder="Name" icon="account" onChangeText={text => setName(text)} value={name}/>
            <AppTextInput placeholder="Email" icon="email"  onChangeText={setEmail} value={email}/>
            <AppTextInput placeholder="Password" icon="lock" onChangeText={setPassword} secureTextEntry={true} value={password} />
            <AppTextInput placeholder="Confirm Password" icon="lock" onChangeText={text => setConfirmPassword(text)} value={confirmPassword} secureTextEntry/>
            <AppTextInput placeholder="Telephone" icon="phone" onChangeText={text => setTelephone(text)} value={telephone}/>


            </ScrollView>

            <AppButton title="Register" onPress={() => registerWithEmail(email, password, navigation, name)} />


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