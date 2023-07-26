import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACeI6ugAJJOn8IEimwfQvVvTWEQmtCnAs",
  authDomain: "react-loginweb.firebaseapp.com",
  projectId: "react-loginweb",
  storageBucket: "react-loginweb.appspot.com",
  messagingSenderId: "159288528958",
  appId: "1:159288528958:web:8ca9e08b583d1e6597816f",
  measurementId: "G-CPYP565NTM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);