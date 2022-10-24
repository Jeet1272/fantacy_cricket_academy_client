// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbAAp6heLPi8VfZS1Bf3TLBujaEqWwtBg",
    authDomain: "fantasy-cricket-academy.firebaseapp.com",
    projectId: "fantasy-cricket-academy",
    storageBucket: "fantasy-cricket-academy.appspot.com",
    messagingSenderId: "274015884110",
    appId: "1:274015884110:web:1f7ccacd3ab10024fcc41f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;