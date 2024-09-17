// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBajg2wj-B4rla-0LW3aIJXIGvRcW4IXJg",
  authDomain: "test-project-fb2d3.firebaseapp.com",
  projectId: "test-project-fb2d3",
  storageBucket: "test-project-fb2d3.appspot.com",
  messagingSenderId: "1032798722546",
  appId: "1:1032798722546:web:201d598ff77363ac82336b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };