// --- FIREBASE CONFIGURATION (Must be loaded BEFORE any <script type="module"> block) ---
// This file makes the configuration globally available to the other HTML files.

// Your web app's Firebase configuration (provided by the user)
const firebaseConfig = {
    apiKey: "AIzaSyD1uoq-EYbTEXVvp3xFl2TeTylcI03VoDw",
    authDomain: "meizan-loans.firebaseapp.com",
    projectId: "meizan-loans",
    storageBucket: "meizan-loans.firebasestorage.app",
    messagingSenderId: "1069728158354",
    appId: "1:1069728158354:web:52e98096eed5d3f02d4c4b",
    measurementId: "G-MV0PW489GD"
};

// App ID used for Firestore path construction (e.g., artifacts/meizanloans/...)
const appId = "meizanloans"; 

// Make config and ID globally available for the module scripts to use
window.firebaseConfig = firebaseConfig;
window.appId = appId;