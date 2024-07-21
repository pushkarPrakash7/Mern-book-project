// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI4VZmCMQ3JcziHQdu0ZotwjIuFJ7dkrI",
  authDomain: "mern-book-invenrtory.firebaseapp.com",
  projectId: "mern-book-invenrtory",
  storageBucket: "mern-book-invenrtory.appspot.com",
  messagingSenderId: "203762113420",
  appId: "1:203762113420:web:8a829e36e15499957794a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;