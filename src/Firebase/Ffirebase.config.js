// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPr8rf1xZwNqZ0LMoowS9FINTB4DB0Np4",
  authDomain: "auth-firebase-context-tailwine.firebaseapp.com",
  projectId: "auth-firebase-context-tailwine",
  storageBucket: "auth-firebase-context-tailwine.appspot.com",
  messagingSenderId: "403631065914",
  appId: "1:403631065914:web:e6af30d53f8f3ceb491e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;