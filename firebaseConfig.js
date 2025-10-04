import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// আপনার Firebase কনফিগারেশন এখানে পেস্ট করুন
const firebaseConfig = {
  apiKey: "আপনার_Firebase_API_Key", 
  authDomain: "আপনার_Auth_Domain", 
  projectId: "আপনার_Project_ID",
  storageBucket: "আপনার_Storage_Bucket",
  messagingSenderId: "আপনার_Messaging_Sender_Id",
  appId: "আপনার_App_ID" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

