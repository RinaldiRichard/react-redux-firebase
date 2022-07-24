import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCHkauAH_BkWDbzsIrfWVL70kMwXRoq64U",
  authDomain: "react-firebase-redux-b1535.firebaseapp.com",
  projectId: "react-firebase-redux-b1535",
  storageBucket: "react-firebase-redux-b1535.appspot.com",
  messagingSenderId: "247185200652",
  appId: "1:247185200652:web:95891fff8bf768f601c029",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
