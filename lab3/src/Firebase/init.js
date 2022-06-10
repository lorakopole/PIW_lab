// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf00ozjnrgwj065hKH_FFpjIbTPLEsRWY",
  authDomain: "behzinga.firebaseapp.com",
  projectId: "behzinga",
  storageBucket: "behzinga.appspot.com",
  messagingSenderId: "638382218903",
  appId: "1:638382218903:web:ddf7e6c66102ed089593d2",
  measurementId: "G-1YKWX0ZGKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);