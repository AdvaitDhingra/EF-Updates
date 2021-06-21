import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyDf0HatDqhBRU6fH_EI1fs7Smz25DiRNnE",
  authDomain: "ef-chat-6b8b2.firebaseapp.com",
  projectId: "ef-chat-6b8b2",
  storageBucket: "ef-chat-6b8b2.appspot.com",
  messagingSenderId: "108798583434",
  appId: "1:108798583434:web:3610f46076616183168373",
  measurementId: "G-CJJJZYEVX5",
});

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
