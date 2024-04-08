import React from 'react';
import {Image, StyleSheet, ImageBackground, Text, View, Button} from "react-native";
import 'react-native-gesture-handler';

import db from '../config/FireBaseConfiguration';
import {doc, setDoc, collection, addDoc, getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";


// Add a new document in collection "cities"
const addDocFunction = async () => {
  try {
    const docRef = await addDoc(collection(db, "frelons"), {
      Nom: "Los Angeles"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos</Text>
      <Text style={styles.subTitle}>Welcome to my todo app</Text>
        <Button onPress={addDocFunction} title="Add a new document" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});




