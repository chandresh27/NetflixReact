// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTs3ZYDbN9ix3o9UodWRG9m7sjPevDBhs",
  authDomain: "netflixgpt-44a4f.firebaseapp.com",
  projectId: "netflixgpt-44a4f",
  storageBucket: "netflixgpt-44a4f.appspot.com",
  messagingSenderId: "534625829813",
  appId: "1:534625829813:web:af00b87c3140cae7490ffc",
  measurementId: "G-Y4R6Q2BPCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();