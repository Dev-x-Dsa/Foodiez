// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';

import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBf_wJGMQTsZc6x3vCQaYi0u-APXfGq0Q4",
  authDomain: "foodiez-fc22f.firebaseapp.com",
  projectId: "foodiez-fc22f",
  storageBucket: "foodiez-fc22f.appspot.com",
  messagingSenderId: "234098302285",
  appId: "1:234098302285:web:a492926377d9c42b452b04",
  measurementId: "G-E2BKV595XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};