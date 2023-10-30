// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6h_Gee1FDIzf73RUoTznSx1Tshl3ZPcE",
  authDomain: "advancetodoapp.firebaseapp.com",
  projectId: "advancetodoapp",
  storageBucket: "advancetodoapp.appspot.com",
  messagingSenderId: "662706011772",
  appId: "1:662706011772:web:d716ee1cd57153d795d3f9",
  measurementId: "G-4K28TFY94V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


