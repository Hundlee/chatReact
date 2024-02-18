// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAbiAyroASkRedsKFa2LYjp6qXDWA4MSJA",
    authDomain: "testechatreact.firebaseapp.com",
    projectId: "testechatreact",
    storageBucket: "testechatreact.appspot.com",
    messagingSenderId: "1084951303174",
    appId: "1:1084951303174:web:a38bdc30d89feac98e5f87",
    measurementId: "G-DSWXZ8CXDB",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
