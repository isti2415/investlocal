// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH4vlqxQlLgw1KLLShYhDXrfuWiiGFgzE",
  authDomain: "investlocal-95b02.firebaseapp.com",
  projectId: "investlocal-95b02",
  storageBucket: "investlocal-95b02.appspot.com",
  messagingSenderId: "104411084976",
  appId: "1:104411084976:web:23584bf8e6c64343c7a375",
  measurementId: "G-7KZ0924VH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);