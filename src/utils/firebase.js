import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf0HatDqhBRU6fH_EI1fs7Smz25DiRNnE",
  authDomain: "ef-chat-6b8b2.firebaseapp.com",
  projectId: "ef-chat-6b8b2",
  storageBucket: "ef-chat-6b8b2.appspot.com",
  messagingSenderId: "108798583434",
  appId: "1:108798583434:web:3610f46076616183168373",
  measurementId: "G-CJJJZYEVX5",
};

const app = firebase.initializeApp(firebaseConfig);
export const analytics = app.analytics();
export const auth = app.auth();
export const firestore = app.firestore();
export default app;
