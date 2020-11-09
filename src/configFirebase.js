import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9-8DSr2UMvAaMVjTXEZf4XUpCZcgkgLw",
    authDomain: "tinder-app-a1cc2.firebaseapp.com",
    databaseURL: "https://tinder-app-a1cc2.firebaseio.com",
    projectId: "tinder-app-a1cc2",
    storageBucket: "tinder-app-a1cc2.appspot.com",
    messagingSenderId: "1087987182012",
    appId: "1:1087987182012:web:6e44deba1e2a23a617a3b9",
    measurementId: "G-484WFKH254"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();

  export default database;
