// src/Components/Firebase.jsx

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;

      localStorage.setItem("name", displayName);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", photoURL);

      navigate("/upload");
    })
    .catch((error) => {
      console.error("Error signing in with Google:", error);
    });
};

export default app;
