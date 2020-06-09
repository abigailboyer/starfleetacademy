import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC8_SumiiGlXDmgVlVEZw3HqFSD2T-5DU",
  authDomain: "starfleet-academy-6a734.firebaseapp.com",
  databaseURL: "https://starfleet-academy-6a734.firebaseio.com",
  projectId: "starfleet-academy-6a734",
  storageBucket: "starfleet-academy-6a734.appspot.com",
  messagingSenderId: "475221194088",
  appId: "1:475221194088:web:56c2cbda40e0b7f2a512dd",
  measurementId: "G-XZNY6Y3NTS"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
