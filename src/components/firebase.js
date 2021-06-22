import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDf0HatDqhBRU6fH_EI1fs7Smz25DiRNnE",
  authDomain: "ef-chat-6b8b2.firebaseapp.com",
  projectId: "ef-chat-6b8b2",
  storageBucket: "ef-chat-6b8b2.appspot.com",
  messagingSenderId: "108798583434",
  appId: "1:108798583434:web:3610f46076616183168373",
  measurementId: "G-CJJJZYEVX5",
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
