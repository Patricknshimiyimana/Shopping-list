import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';;


const config = {
    apiKey: "AIzaSyBVs6splzIm0fPnQIGuOMveaTQnWrixD1k",
    authDomain: "shoppinglist2-2d88c.firebaseapp.com",
    projectId: "shoppinglist2-2d88c",
    storageBucket: "shoppinglist2-2d88c.appspot.com",
    messagingSenderId: "760308358350",
    appId: "1:760308358350:web:aee38c69ec7e41c6c5049f"
};
firebase.initializeApp(config);

const db = firebase.firestore();

const auth = firebase.auth();

export {db, auth};

