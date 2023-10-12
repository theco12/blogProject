// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ8KW2vSGiawRMkx_eP2p4p8MMQvT85ZU",
  authDomain: "blog-27ec0.firebaseapp.com",
  projectId: "blog-27ec0",
  storageBucket: "blog-27ec0.appspot.com",
  messagingSenderId: "785449552652",
  appId: "1:785449552652:web:b55a806dd8287484145729",
  measurementId: "G-PXP4C8QGSV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
