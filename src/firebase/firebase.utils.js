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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error in creating user! ', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;