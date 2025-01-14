// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDAJQ-btA1wICfloj_juFxv5S_7kan47dU",
  authDomain: "ecommerce-authen.firebaseapp.com",
  projectId: "ecommerce-authen",
  storageBucket: "ecommerce-authen.appspot.com",
  messagingSenderId: "328586673369",
  appId: "1:328586673369:web:2c0779aa5c40198bb2d2c8"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
//db reference
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp)

export { firebaseApp, auth ,db,storage};

