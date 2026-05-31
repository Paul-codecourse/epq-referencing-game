import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaApIrs7RzN7dGhaUOMCjNMyHLqVbZKwM",
  authDomain: "epq-referencing-game.firebaseapp.com",
  projectId: "epq-referencing-game",
  storageBucket: "epq-referencing-game.firebaseapp.com",
  messagingSenderId: "579396666550",
  appId: "1:579396666550:web:575dc2d6887bb1a8e51217"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);