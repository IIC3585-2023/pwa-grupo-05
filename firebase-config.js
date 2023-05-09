// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUCa4UanPc2SnI2iAnMjrqAmrBm9U-PmU",
  authDomain: "web-avanzado-twitter.firebaseapp.com",
  projectId: "web-avanzado-twitter",
  storageBucket: "web-avanzado-twitter.appspot.com",
  messagingSenderId: "410187293169",
  appId: "1:410187293169:web:d4e84f2ae91621eaf8e450",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
  doc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  Timestamp
}