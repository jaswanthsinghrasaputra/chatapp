import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3vlVxiTUeSY_qMiR2F5XSK238S2y0VCI",
  authDomain: "gentle-current-353215.firebaseapp.com",
  databaseURL: "https://gentle-current-353215-default-rtdb.firebaseio.com",
  projectId: "gentle-current-353215",
  storageBucket: "gentle-current-353215.appspot.com",
  messagingSenderId: "5551107221",
  appId: "1:5551107221:web:3f3eed69520bfd124e3f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
