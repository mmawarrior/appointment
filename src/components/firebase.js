// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-zU2KJVCNMDY5DrFoPe574Bpg8YzunjU",
  authDomain: "data-2f062.firebaseapp.com",
  projectId: "data-2f062",
  storageBucket: "data-2f062.appspot.com",
  messagingSenderId: "748209694721",
  appId: "1:748209694721:web:9b6c08c870d41aa0b77800",
  measurementId: "G-PVWPQDGQS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db };
