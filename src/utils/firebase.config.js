import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-b1535.firebaseapp.com",
  projectId: "react-firebase-redux-b1535",
  storageBucket: "react-firebase-redux-b1535.appspot.com",
  messagingSenderId: "247185200652",
  appId: "1:247185200652:web:95891fff8bf768f601c029",
});

export const auth = app.auth();
export default app;
