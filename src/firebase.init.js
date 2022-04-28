// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/firebase-auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfiMRuTkKP6ypjPp5veTuBuqd0ZZk1F-4",
    authDomain: "warehouse-inventory-client.firebaseapp.com",
    projectId: "warehouse-inventory-client",
    storageBucket: "warehouse-inventory-client.appspot.com",
    messagingSenderId: "879513796204",
    appId: "1:879513796204:web:aa50591cfb211ff6d22249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;