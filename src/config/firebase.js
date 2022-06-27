// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "hackittogether-3e68b.firebaseapp.com",
  projectId: "hackittogether-3e68b",
  storageBucket: "hackittogether-3e68b.appspot.com",
  messagingSenderId: "946363772047",
  appId: "1:946363772047:web:1d3d10bf678eb719dc54fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = app.auth();
export const provider = app.auth.GithubAuthProvider();
