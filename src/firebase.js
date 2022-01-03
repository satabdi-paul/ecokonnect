import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBUYkISpPHisK6xv8ufJ1x5-g6i5Ye0fPQ",
  authDomain: "login-page-5720.firebaseapp.com",
  projectId: "login-page-5720",
  storageBucket: "login-page-5720.appspot.com",
  messagingSenderId: "879826776590",
  appId: "1:879826776590:web:f5dbaba13334876668c25f"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;
