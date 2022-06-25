
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXXXBEf8haoFPCAnIh27VLOUj85sxNaH8",
  authDomain: "backend31865-db374.firebaseapp.com",
  projectId: "backend31865-db374",
  storageBucket: "backend31865-db374.appspot.com",
  messagingSenderId: "372169121209",
  appId: "1:372169121209:web:b7a995102de3427fbc2a68"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)