// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import  'firebase/storage';
import  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxPf_b6NFfd5tAzLiKcj12zSs4QxmzzGE",
  authDomain: "albin-first-firebase.firebaseapp.com",
  projectId: "albin-first-firebase",
  storageBucket: "albin-first-firebase.appspot.com",
  messagingSenderId: "1011439590743",
  appId: "1:1011439590743:web:8711ac4c18432ce239f212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectFirestore,projectStorage}