// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxvZ8G5FDIgQvHwj_rJgpphJpJh5cbS_U",
    authDomain: "fir-auth-4d646.firebaseapp.com",
    projectId: "fir-auth-4d646",
    storageBucket: "fir-auth-4d646.appspot.com",
    messagingSenderId: "83001307905",
    appId: "1:83001307905:web:b5f2ab6d021d311c222100"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };