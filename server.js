// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0tKjT15ZymQ76h3vllzNenY4VN4yDgF4",
  authDomain: "redwish-130225.firebaseapp.com",
  databaseURL: "https://redwish-130225-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "redwish-130225",
  storageBucket: "redwish-130225.firebasestorage.app",
  messagingSenderId: "617244627905",
  appId: "1:617244627905:web:b729d6a62e912e3558d540",
  measurementId: "G-JKC6YKDR1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  const Submit = () => {
    set(ref(db, "users/harsh"), {
      name: "Harsh",
      age: 21,
      admin: true
    })
    .then(() => alert("User added!"))
    .catch((error) => alert(error.message));
  };

  
};