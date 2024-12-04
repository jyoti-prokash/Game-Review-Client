// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAshBEBzz-BPHYIZJaM_72wwvr18DTlWyk",
  authDomain: "game-review-app-95101.firebaseapp.com",
  projectId: "game-review-app-95101",
  storageBucket: "game-review-app-95101.firebasestorage.app",
  messagingSenderId: "680145364145",
  appId: "1:680145364145:web:c6a098c4320f7863662e90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;