// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsdMume4eoxuXpSL77XnOTeSV8qpyNlPs",
  authDomain: "kt-schools.firebaseapp.com",
  projectId: "kt-schools",
  storageBucket: "kt-schools.appspot.com",
  messagingSenderId: "871012960674",
  appId: "1:871012960674:web:127fbc9266b97bfd6e0afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export app for use it from others file
export default app;