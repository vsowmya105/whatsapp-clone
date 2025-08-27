import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAKCKFvA38I45-eGj-KlKPWToTOrV6Ws_I",
  authDomain: "whatsapp-clone-74e6e.firebaseapp.com",
  projectId: "whatsapp-clone-74e6e",
  storageBucket: "whatsapp-clone-74e6e.firebasestorage.app",
  messagingSenderId: "550298065392",
  appId: "1:550298065392:web:7644ae9a21e67fec77a535",
  measurementId: "G-6TEGJN0VWP"
};

const app=initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);