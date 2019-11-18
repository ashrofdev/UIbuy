import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
const nodemailer = require('nodemailer');

const firebaseConfig = {
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

  /////////////////




  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    
    auth: {
      user: "ashsal2001@gmail.com",
      pass: "salmanashrafatmagul"
    },
    tls: {
      
      rejectUnauthorized: false
    }
  });


let info = transporter.sendMail({
    from: 'ashsal2001@gmail.com', 
    to: 'ashsall115@gmail.com', 
    subject: 'PRODUCT REQUEST ✔', 
    text: 'Hello world?', 
    html: '<b>A client requested your product</b> <p>Wow, finally youve got a customer</p>' // html body
})

console.log('Message sent: %s', info.messageId,);
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
