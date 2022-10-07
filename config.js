import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAvMOVQuWAuyBhR2B6PAsBhwMofwSEimw0",
    authDomain: "email-authentication-c8c74.firebaseapp.com",
    projectId: "email-authentication-c8c74",
    storageBucket: "email-authentication-c8c74.appspot.com",
    messagingSenderId: "2514615254",
    appId: "1:2514615254:web:2217e7f9a4847e0b298277"
  };
  
  const db = initializeApp(firebaseConfig);

  export default db

