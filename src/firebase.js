
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjbEZPo_tE_FsFU65bc91AO8FgLfHDcFU",
  authDomain: "newecommerce-6437e.firebaseapp.com",
  projectId: "newecommerce-6437e",
  storageBucket: "newecommerce-6437e.appspot.com",
  messagingSenderId: "437439672402",
  appId: "1:437439672402:web:377ff4a66fa1614ce86f8b",
  measurementId: "G-RXC2XDPV0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)