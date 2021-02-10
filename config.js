import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCsD4O-Dxlprlm3zejDbj6G7dfizNvEZvM",
  authDomain: "fitness-app-aa827.firebaseapp.com",
  projectId: "fitness-app-aa827",
  storageBucket: "fitness-app-aa827.appspot.com",
  messagingSenderId: "396197691856",
  appId: "1:396197691856:web:062b08b4f62d9b319539d5"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
