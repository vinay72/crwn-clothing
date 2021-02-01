import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTplLmef-dLwdl-WyWHqiH9fjXHybjlM4",
    authDomain: "crwn-db-7d601.firebaseapp.com",
    projectId: "crwn-db-7d601",
    storageBucket: "crwn-db-7d601.appspot.com",
    messagingSenderId: "897633963354",
    appId: "1:897633963354:web:288b872a1ffcf409963763",
    measurementId: "G-98CEFXT7EB"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;