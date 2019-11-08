import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyC9vhjcrGujljlfDLhSKsEkBnYJqaCsLqA",
    authDomain: "test-mflbrq.firebaseapp.com",
    databaseURL: "https://test-mflbrq.firebaseio.com",
    projectId: "test-mflbrq",
    storageBucket: "test-mflbrq.appspot.com",
    messagingSenderId: "944291062313",
    appId: "1:944291062313:web:7af4c2f4bba92e2841b238",
    measurementId: "G-PV8YZS2737"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firebaseDB = firebase.database()
 

  export const storage = firebase.storage()
