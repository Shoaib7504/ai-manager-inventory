// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFIh4vE4POqTzwGeqjIGoQJlyUJoS0xHA",
    authDomain: "ai-manager-inventory.firebaseapp.com",
    projectId: "ai-manager-inventory",
    storageBucket: "ai-manager-inventory.firebasestorage.app",
    messagingSenderId: "632242297325",
    appId: "1:632242297325:web:617f44edca6a401010efe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;