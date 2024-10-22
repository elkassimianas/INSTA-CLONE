import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWdNdB463xbFDjyDC20mVGsyiycSr0-kk",
  authDomain: "insta-clone-c3808.firebaseapp.com",
  projectId: "insta-clone-c3808",
  storageBucket: "insta-clone-c3808.appspot.com",
  messagingSenderId: "377709490712",
  appId: "1:377709490712:web:26e65054b9cd9cec2c096d",
  measurementId: "G-3BPCQCQM4R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage}
