// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from 'firebase/auth';
const { FIREBASE_API_KEY } = process.env;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "hackittogether-3e68b.firebaseapp.com",
  projectId: "hackittogether-3e68b",
  storageBucket: "hackittogether-3e68b.appspot.com",
  messagingSenderId: "946363772047",
  appId: "1:946363772047:web:1d3d10bf678eb719dc54fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GithubAuthProvider();
provider.addScope('repo');
