import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6QJEVa9PC6FwE8yNKLOKl8PqaybcfNR0",
  authDomain: "realtimechat-c28eb.firebaseapp.com",
  projectId: "realtimechat-c28eb",
  storageBucket: "realtimechat-c28eb.appspot.com",
  messagingSenderId: "743682413560",
  appId: "1:743682413560:web:d5a643782599fdd94b3c0d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db =getFirestore();
