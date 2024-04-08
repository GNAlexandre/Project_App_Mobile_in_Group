import react from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore,initializeFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyCqr3SXKq-AqyuOc1NMJQKhgvDnBtn-CNg",
    authDomain: "project-dev-mobile-in-group.firebaseapp.com",
    projectId: "project-dev-mobile-in-group",
    storageBucket: "project-dev-mobile-in-group.appspot.com",
    messagingSenderId: "803213318773",
    appId: "1:803213318773:web:af964bd8e60909d20bf63c",
    measurementId: "G-Q252R3XF5T"
};

/*
export
const firebaseConfig = {
        apiKey:
            "AIzaSyCoIFCilT-zttukFLkL25Wmm_ww-lW83p4",

        authDomain:
            "nectahr-51c5d.firebaseapp.com",

        projectId:
            "nectahr-51c5d",

        storageBucket:
            "nectahr-51c5d.appspot.com",

        messagingSenderId:
            "175101004332",

        appId:
            "1:175101004332:web:2d74dc26b02b850dd4df89"

    };

*/
//const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app,{experimentalForceLongPolling: true});


export default db;























