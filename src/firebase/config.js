import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnCkgr7RDh-X5ieZdbi9dRI7vC9vwBo6k",
  authDomain: "fullflix-95911.firebaseapp.com",
  projectId: "fullflix-95911",
  storageBucket: "fullflix-95911.appspot.com",
  messagingSenderId: "162967878669",
  appId: "1:162967878669:web:b34414d7a42806f714e944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };