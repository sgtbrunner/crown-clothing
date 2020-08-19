import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6nwOlZhDgTN0AzNZqdZuM3eMxSp8uUdo",
    authDomain: "crown-clothing-db-9b86e.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-9b86e.firebaseio.com",
    projectId: "crown-clothing-db-9b86e",
    storageBucket: "crown-clothing-db-9b86e.appspot.com",
    messagingSenderId: "940396830305",
    appId: "1:940396830305:web:832ce883ef7566fd141420"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;