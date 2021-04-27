import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here i import the seed file
// import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyDP3p1wjh0jan3F-Zm_zks2yc6n-N9hacg",
    authDomain: "camagru-e4e62.firebaseapp.com",
    projectId: "camagru-e4e62",
    storageBucket: "camagru-e4e62.appspot.com",
    messagingSenderId: "1029509420409",
    appId: "1:1029509420409:web:907e2b0a28f2a8cc4c8ba8"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

// here is where I whant to call the seed file (only ONCE!)
// seedDatabase(firebase)

export {firebase, FieldValue};