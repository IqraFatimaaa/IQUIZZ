// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import auth and Google provider

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFsrp5up7PVHqO9aqGPPKWm8PazaT_3Lo",
  authDomain: "iquiz-7b422.firebaseapp.com",
  projectId: "iquiz-7b422",
  storageBucket: "iquiz-7b422.appspot.com",
  messagingSenderId: "1034241812272",
  appId: "1:1034241812272:web:e04c7e8a20379103144af5",
  measurementId: "G-KWQMS8KQW8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Set up authentication and export it
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
