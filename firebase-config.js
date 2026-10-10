// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJQqiffIJNgIzsXhmbI83PpXeqKZucx1E",
  authDomain: "news-of-democracy.firebaseapp.com",
  projectId: "news-of-democracy",
  storageBucket: "news-of-democracy.firebasestorage.app",
  messagingSenderId: "843725943538",
  appId: "1:843725943538:web:cdc8c1aedabf1db0f0966b",
  measurementId: "G-TJY1FXYBLN"
};

// Initialize Firebase (compat mode for simple use)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
