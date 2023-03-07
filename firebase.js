// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWra3mGJ4zseUh6tB5ceNraKOY7nYKGtI",
  authDomain: "rent-a-car-db292.firebaseapp.com",
  databaseURL: "https://rent-a-car-db292-default-rtdb.firebaseio.com",
  projectId: "rent-a-car-db292",
  storageBucket: "rent-a-car-db292.appspot.com",
  messagingSenderId: "579499422123",
  appId: "1:579499422123:web:4c6e88ed525cebeae2e2ee",
  measurementId: "G-02RQEFRCWJ"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
module.exports = getStorage(firebaseApp);