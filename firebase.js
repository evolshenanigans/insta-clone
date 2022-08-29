// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuDIUQgat2lfu0ZskD98GED4cHP-TMk-s",
  authDomain: "insta-clone-197e6.firebaseapp.com",
  projectId: "insta-clone-197e6",
  storageBucket: "insta-clone-197e6.appspot.com",
  messagingSenderId: "323404520598",
  appId: "1:323404520598:web:9ca2834783e987480df6b7",
  measurementId: "G-3DVBGZ99N0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db,  storage };