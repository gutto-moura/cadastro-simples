import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwWgQzIV1YM2ERR14yShBZeZXRCrQ6-xk",
  authDomain: "projeto-cadastro-experience.firebaseapp.com",
  projectId: "projeto-cadastro-experience",
  storageBucket: "projeto-cadastro-experience.appspot.com",
  messagingSenderId: "1067588144431",
  appId: "1:1067588144431:web:24e77cb061accf129b25da",
  measurementId: "G-JCK3F9GMR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);