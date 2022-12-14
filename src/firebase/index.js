import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyBd1a1BiCo7a1KJUUUmKZ7CKRLUZEHKu6A',
  authDomain: 'portfolio-c079b.firebaseapp.com',
  projectId: 'portfolio-c079b',
  storageBucket: 'portfolio-c079b.appspot.com',
  messagingSenderId: '708096214596',
  appId: '1:708096214596:web:351d921365a6b45e249e11',
  measurementId: 'G-LPBR4W03ZG'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}