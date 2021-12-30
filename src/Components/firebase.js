// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWXV4NVeQx_2NlTIC93XD77vXSHtYECwI",
    authDomain: "blooddonation-e5dbb.firebaseapp.com",
    projectId: "blooddonation-e5dbb",
    storageBucket: "blooddonation-e5dbb.appspot.com",
    messagingSenderId: "569600934289",
    appId: "1:569600934289:web:e93e362985f42971069a30"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}
const auth = firebase.auth();
export { auth };