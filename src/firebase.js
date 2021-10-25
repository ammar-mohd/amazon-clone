// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Sj_2rzz4vKB75xFBTVT2m1MW1sj7ijg",
  authDomain: "clone-1b1bb.firebaseapp.com",
  projectId: "clone-1b1bb",
  storageBucket: "clone-1b1bb.appspot.com",
  messagingSenderId: "265186391790",
  appId: "1:265186391790:web:dccc653f384947893365ff",
  measurementId: "G-26JY2GJTRS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
