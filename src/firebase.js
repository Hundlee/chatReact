// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDbenG9d91XU6Rl-qc9xhUkBBehGSBTwz4",
    authDomain: "testechat-a87f9.firebaseapp.com",
    projectId: "testechat-a87f9",
    storageBucket: "testechat-a87f9.appspot.com",
    messagingSenderId: "113286368834",
    appId: "1:113286368834:web:9e7c96b850a3c9748a27db",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
