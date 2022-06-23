// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJUzeJEm5NmC-SnNq2QYt2FRpctg-letY",
  authDomain: "luxury-living-4e710.firebaseapp.com",
  projectId: "luxury-living-4e710",
  storageBucket: "luxury-living-4e710.appspot.com",
  messagingSenderId: "446074951018",
  appId: "1:446074951018:web:27b53d2924e4d681f44113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;