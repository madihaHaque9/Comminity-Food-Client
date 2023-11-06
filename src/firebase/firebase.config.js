// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALlQZwohT6Ul6Vvt0cQqPVCiJsfgSetkk",
  authDomain: "community-food-service-client.firebaseapp.com",
  projectId: "community-food-service-client",
  storageBucket: "community-food-service-client.appspot.com",
  messagingSenderId: "766655898447",
  appId: "1:766655898447:web:bceb1aa7ec5ea8d2611b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;