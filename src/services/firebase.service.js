import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD6nwOlZhDgTN0AzNZqdZuM3eMxSp8uUdo',
  authDomain: 'crown-clothing-db-9b86e.firebaseapp.com',
  databaseURL: 'https://crown-clothing-db-9b86e.firebaseio.com',
  projectId: 'crown-clothing-db-9b86e',
  storageBucket: 'crown-clothing-db-9b86e.appspot.com',
  messagingSenderId: '940396830305',
  appId: '1:940396830305:web:832ce883ef7566fd141420',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
