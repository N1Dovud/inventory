import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDA4ksWtPFztq5Na9EkvlDDbBaYURzk9RE",
 authDomain: "inventory-management-7f48d.firebaseapp.com",
 projectId: "inventory-management-7f48d",
 storageBucket: "inventory-management-7f48d.appspot.com",
 messagingSenderId: "819451745979",
 appId: "1:819451745979:web:14bc5d916c84ad03ef7b9e"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };