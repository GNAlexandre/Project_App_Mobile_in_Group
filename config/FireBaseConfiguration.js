import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCqr3SXKq-AqyuOc1NMJQKhgvDnBtn-CNg",
    authDomain: "project-dev-mobile-in-group.firebaseapp.com",
    projectId: "project-dev-mobile-in-group",
    storageBucket: "project-dev-mobile-in-group.appspot.com",
    messagingSenderId: "803213318773",
    appId: "1:803213318773:web:af964bd8e60909d20bf63c",
    measurementId: "G-Q252R3XF5T"
};

const app = initializeApp(firebaseConfig);

// Configuration de Firestore avec des paramètres spécifiques pour les environnements susceptibles de bloquer les WebSockets
/*const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});*/
const db = getFirestore(app);

// Configuration de l'authentification Firebase avec la persistance des données via AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db };





















