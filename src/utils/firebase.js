// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ZTXdglScNoeulhOFN0tHuAU8vXTiuB0",
  authDomain: "prasunnetgpt.firebaseapp.com",
  projectId: "prasunnetgpt",
  storageBucket: "prasunnetgpt.appspot.com",
  messagingSenderId: "346040485343",
  appId: "1:346040485343:web:b4eddd5fb4e034b81ab06a",
  measurementId: "G-7TWP3JF8X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();