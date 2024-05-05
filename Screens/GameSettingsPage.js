import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {NavBar} from "../components/NavBar";
import AppTextInput from "../components/TextInput";
import AppButton from "../components/Button";
import {registerWithEmail} from "../components/Auth/Authentification";
import React, {useState} from "react";
import AvatarComponent from "../components/AvatarComponent";
import Background from "../components/BackGround";


const GameSettingsPage = () => {
    const [name, setName] = useState(); // [state, setState
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();
    const [telephone, setTelephone] = useState();

    return (
      <>
        <NavBar/>
          <Background>

          <AvatarComponent/>

          <View style={styles.container}>
              <ScrollView>


                  <AppTextInput placeholder="Change Name" icon="account" onChangeText={text => setName(text)} value={name}/>
                  <AppTextInput placeholder="Change Email" icon="email"  onChangeText={setEmail} value={email}/>
                  <AppTextInput placeholder="Change Password" icon="lock" onChangeText={setPassword} secureTextEntry={true} value={password} />
                  <AppTextInput placeholder="Confirm Password" icon="lock" onChangeText={text => setConfirmPassword(text)} value={confirmPassword} secureTextEntry/>
                  <AppTextInput placeholder="Change Number" icon="phone" onChangeText={text => setTelephone(text)} value={telephone}/>


              </ScrollView>

              <AppButton title="Save"/>


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
        //centrer l'image
        alignSelf: "center",
        //arrondir l'image
        borderRadius: 100,
        marginBottom: 50,

    },


});
export default GameSettingsPage;