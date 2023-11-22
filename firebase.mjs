// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOhSt_HUD9y8G3FK_PAz5YhZB4YBnL4lM",
    authDomain: "patronesdw-c8e47.firebaseapp.com",
    projectId: "patronesdw-c8e47",
    storageBucket: "patronesdw-c8e47.appspot.com",
    messagingSenderId: "42656248634",
    appId: "1:42656248634:web:5788ff5884284ef8af1603",
    measurementId: "G-NDYF7F5H4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);