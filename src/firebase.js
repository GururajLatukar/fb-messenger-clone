import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBecBfT4TGgAQmghHRsx7i3oaHvE2dvpDc",
  authDomain: "fb-messenger-clone-7d32d.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-7d32d.firebaseio.com",
  projectId: "fb-messenger-clone-7d32d",
  storageBucket: "fb-messenger-clone-7d32d.appspot.com",
  messagingSenderId: "339082383137",
  appId: "1:339082383137:web:5f096b242533306642f860",
  measurementId: "G-8KXFMFNBQP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
