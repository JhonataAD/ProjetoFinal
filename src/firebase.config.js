import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBQaw6LT5y4gqktAY8u2cSeCtLAXvX-j0k",
    authDomain: "eccomerce-477c6.firebaseapp.com",
    projectId: "eccomerce-477c6",
    storageBucket: "eccomerce-477c6.appspot.com",
    messagingSenderId: "391396835776",
    appId: "1:391396835776:web:ed6666e49c0ba20ce70825"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
 
export default app;




 