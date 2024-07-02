import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtagpsMTKHyCiien7YrnfPSHUWpgMi6_M",
  authDomain: "video-analytics-3591d.firebaseapp.com",
  projectId: "video-analytics-3591d",
  storageBucket: "video-analytics-3591d.appspot.com",
  messagingSenderId: "538526220143",
  appId: "1:538526220143:web:8cb90838ebbd47c496b29a",
  measurementId: "G-DM8QC8J6ML"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);

    navigate("/upload");
  }).catch((error) => {
    console.log(error);
  });
};

export default app;