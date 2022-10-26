import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjwDeNPSJ7f3yIBqzBO4mhJZ5E7s2svbE",
    authDomain: "tinder-clone-583dc.firebaseapp.com",
    databaseURL: "https://tinder-clone-583dc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tinder-clone-583dc",
    storageBucket: "tinder-clone-583dc.appspot.com",
    messagingSenderId: "690737974111",
    appId: "1:690737974111:web:6725b7ef797ea7165e84ea",
    measurementId: "G-T7N77G6GEY"
  };

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;

export default getFirestore();