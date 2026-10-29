// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJjQKi-kaO-ib7pxVj5fTM5VWgzC2NL_A",
  authDomain: "democracy-news-e5857.firebaseapp.com",
  databaseURL: "https://democracy-news-e5857-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "democracy-news-e5857",
  storageBucket: "democracy-news-e5857.firebasestorage.app",
  messagingSenderId: "69601903557",
  appId: "1:69601903557:web:10fc18932abb3b86c181ac",
  measurementId: "G-J7ZP49V7J5"
};

// Initialize Firebase (Compatible Version)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Database ডিফাইন করা (যা আপনার admin.html এ কাজে লাগবে)
const db = firebase.database();
