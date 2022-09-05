// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrYjw8aFmSSbiEqfpuHf7O1SaRyZjUW_s",
  authDomain: "ema-john-router-firebase-84e9a.firebaseapp.com",
  projectId: "ema-john-router-firebase-84e9a",
  storageBucket: "ema-john-router-firebase-84e9a.appspot.com",
  messagingSenderId: "282993828614",
  appId: "1:282993828614:web:51ce5fbc0dae9e0e4cf487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;