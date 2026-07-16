import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC__acjzqQ70OJrFSI79mo4OwlKDmd6hLw",
    authDomain: "libreria-1833d.firebaseapp.com",
    projectId: "libreria-1833d",
    storageBucket: "libreria-1833d.firebasestorage.app",
    messagingSenderId: "718294780350",
    appId: "1:718294780350:web:03fbb82677cede1b50d1ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);