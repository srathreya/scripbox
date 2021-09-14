import firebase from "firebase";
import "firebase/database";
import 'firebase/storage'
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCEunZVqz3hNfxlIqwz_yuvU1-MgnkQYaQ",
  authDomain: "scripbox-52293.firebaseapp.com",
  projectId: "scripbox-52293",
  storageBucket: "scripbox-52293.appspot.com",
  messagingSenderId: "257938307264",
  appId: "1:257938307264:web:ea6adc7321316218549525"
};
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()
  const storage = firebase.storage()
  //const db = firebase.firestore();

  
  export  {
    storage,database, firebase as default
  }
  