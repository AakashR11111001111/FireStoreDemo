// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2JTuJKbFCuD25JdRgAetYp8jKjOP7KyA",
  authDomain: "simple-blog-app-721ca.firebaseapp.com",
  projectId: "simple-blog-app-721ca",
  storageBucket: "simple-blog-app-721ca.firebasestorage.app",
  messagingSenderId: "51069195719",
  appId: "1:51069195719:web:153e98e4cb75566ad075e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const fireStore = getFirestore(app);
