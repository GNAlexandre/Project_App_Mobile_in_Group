import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../../config/FirebaseConfig';
import { doc, getDoc, setDoc,updateDoc } from "firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = getAuth();


const registerWithEmail = async (email, password, navigation, username, phone) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDocRef = doc(db, "users", user.uid);

    await setDoc(userDocRef, {
      email: email,
      username: username,
      phone: phone,
    });

    navigation.navigate("Login");
  } catch (error) {
    console.error(error);
  }
};

const loginWithEmail = async (email, password, navigation) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      await AsyncStorage.setItem('user', JSON.stringify({
        id: user.uid,
        ...userData
      }));
    }

    navigation.navigate("GameSelection");

  } catch (error) {
    console.error(error);
  }
};

const getLoggedUser = async () => {
  try {
    const userDataString = await AsyncStorage.getItem('user');

    if (userDataString) {
      return JSON.parse(userDataString);
    } else {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();

          await AsyncStorage.setItem('user', JSON.stringify(userData));

          return userData;
        } else {
          console.log("No such document!");
          return null;
        }
      } else {
        console.log("No user logged in!");
        return null;
      }
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const UpdateUserDataToFirebase = async (userId, name, phone) => {
  try {
    const userDocRef = doc(db, "users", userId);
    console.log("User data: ", userDocRef);

    await updateDoc(userDocRef, {
      username: name,
      phone: phone,
    });

    console.log("User data saved successfully to Firebase!");
  } catch (error) {
    console.error("Error saving user data to Firebase:", error);
  }
};
export { registerWithEmail, loginWithEmail, getLoggedUser,UpdateUserDataToFirebase };
