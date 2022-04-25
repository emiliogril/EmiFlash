import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBlisAU6etcYLHmPenGOnKG_nqGnD0J8MQ",
  authDomain: "emi-flash.firebaseapp.com",
  projectId: "emi-flash",
  storageBucket: "emi-flash.appspot.com",
  messagingSenderId: "851006382968",
  appId: "1:851006382968:web:77e70a2b9e8d0793d89e8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)