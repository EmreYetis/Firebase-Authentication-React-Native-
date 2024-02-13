// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeZKOO-vx3DkcJdhwGvaM98u44S6bqbJ0",
  authDomain: "login-87e9f.firebaseapp.com",
  projectId: "login-87e9f",
  storageBucket: "login-87e9f.appspot.com",
  messagingSenderId: "346507560516",
  appId: "1:346507560516:web:7452d0adcc16f972d59e11",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };
