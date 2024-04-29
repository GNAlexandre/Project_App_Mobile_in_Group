import React, { useState } from 'react';
import { registerWithEmail, loginWithEmail } from './Authentification';
import {Image, StyleSheet, TextInput, Text, View, Button} from "react-native";

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry={true} value={password} />
      <Button title="Sign Up" onPress={() => registerWithEmail(email, password)} />
      <Button title="Login" onPress={() => loginWithEmail(email, password)} />
    </View>
  );
};

export { AuthComponent };
