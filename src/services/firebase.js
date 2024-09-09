// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPSsZ7KZv_sYRAp4pD48H74GzjztVIiSg",
  authDomain: "libas-e22e9.firebaseapp.com",
  projectId: "libas-e22e9",
  storageBucket: "libas-e22e9.appspot.com",
  messagingSenderId: "1095428156373",
  appId: "1:1095428156373:web:49dfa5b774c1b300a4eb5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
