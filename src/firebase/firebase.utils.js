import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4QRF1Xpj5-mHhnnFrwvv7ECtDJSB-ZKI",
  authDomain: "crwn-db-12.firebaseapp.com",
  databaseURL: "https://crwn-db-12.firebaseio.com",
  projectId: "crwn-db-12",
  storageBucket: "crwn-db-12.appspot.com",
  messagingSenderId: "355988214846",
  appId: "1:355988214846:web:e9f5e6438e4dbf34"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;