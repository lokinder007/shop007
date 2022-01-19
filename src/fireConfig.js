import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBko172JklehIOL7iGwOSgpppjip-nj05Y",
  authDomain: "shop007-31c98.firebaseapp.com",
  projectId: "shop007-31c98",
  storageBucket: "shop007-31c98.appspot.com",
  messagingSenderId: "906104449530",
  appId: "1:906104449530:web:b36edf7fc7e6111d475c43",
  measurementId: "G-HEM1KN13H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const fireDB = getFirestore(app)

export default fireDB