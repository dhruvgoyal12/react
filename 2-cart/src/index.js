import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBLLc3fxec8bczQX2nzLYBWzquc3iJsBog",
  authDomain: "cart-976a2.firebaseapp.com",
  projectId: "cart-976a2",
  storageBucket: "cart-976a2.appspot.com",
  messagingSenderId: "19191417352",
  appId: "1:19191417352:web:5b68faa72159c1c30adfbd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

