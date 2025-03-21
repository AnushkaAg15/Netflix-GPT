// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvBL_6YhzRN1kgM_rfIH3Xpw7Wad0Nekk",
  authDomain: "netflixgpt-fdb07.firebaseapp.com",
  projectId: "netflixgpt-fdb07",
  storageBucket: "netflixgpt-fdb07.firebasestorage.app",
  messagingSenderId: "1058503734429",
  appId: "1:1058503734429:web:45df3575e7033e6ed65074",
  measurementId: "G-7JW8DED9VD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
