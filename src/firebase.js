import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTWm_7Bz0W3HNFfb-BcmilzBJ7omuSwc8",
    authDomain: "hackathon-b56b3.firebaseapp.com",
    projectId: "hackathon-b56b3",
    storageBucket: "hackathon-b56b3.firebasestorage.app",
    messagingSenderId: "313733988874",
    appId: "1:313733988874:web:51a8df9bacb71140e455f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth();

// Initialize Google and Facebook providers
const provide = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Initialize Storage
const storage = getStorage(app);

// Exporting to be used in other parts of your application
export { auth, provide, facebookProvider, storage };
