// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAim6Cq-sY4Qw1D7EBZ98CwPoDtKuRhhp4",
  authDomain: "sparta-react-basic-663a6.firebaseapp.com",
  projectId: "sparta-react-basic-663a6",
  storageBucket: "sparta-react-basic-663a6.appspot.com",
  messagingSenderId: "795211177311",
  appId: "1:795211177311:web:7f25a65327d8b19dfdeaea",
  measurementId: "G-KTN2G4JLW9"
};


initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();
