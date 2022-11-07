// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyl67_ioRQy-l-S60AD8Gs1x7-uLbMQAs",
    authDomain: "musicplayer-7a4ac.firebaseapp.com",
    databaseURL: "https://musicplayer-7a4ac-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "musicplayer-7a4ac",
    storageBucket: "musicplayer-7a4ac.appspot.com",
    messagingSenderId: "271357945665",
    appId: "1:271357945665:web:bd0d293b15c4fda45763c0",
    measurementId: "G-BXLTCD3Q2Q"
  }
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const database = getDatabase(app);
  export const storage = getStorage(app);
  