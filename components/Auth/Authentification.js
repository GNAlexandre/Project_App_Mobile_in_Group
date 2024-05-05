import firebase from '../../config/FireBaseConfiguration';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../../config/FireBaseConfiguration';
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = getAuth();
const registerWithEmail = async (email, password, navigation, username) => {
  try {
    console.log("called registerWithEmail")
    userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    //const usersCollectionRef = collection(db, "users",user.uid);
    const userDocRef = doc(db, "users", user.uid);

    await setDoc(userDocRef, {
      email: email,
      username: username,
    });

    console.log("User account created & signed in!");
    navigation.navigate("Login");
  } catch (error) {
    console.error(error);
  }
};

const loginWithEmail = async (email, password, navigation) => {
  try {
    console.log("called LoginWithEmail")
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    console.log("User signed in!");

    const user = userCredential.user;

    // Récupérer les informations utilisateur supplémentaires de Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    console.log("User data: ", user.uid);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Stocker les données utilisateur dans AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      const userDataString = await AsyncStorage.getItem('user');
      console.log("User data in AsyncStorage: ", JSON.parse(userDataString));
    }
    else {
      console.log("No such document!");
    }
    navigation.navigate("GameSelection");


  } catch (error) {
    console.error(error);
  }
};

export { registerWithEmail, loginWithEmail };
