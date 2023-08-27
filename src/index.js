import './js/header';
import './js/top-books';
import './js/books-by-category';
import './js/category-list';
import './js/foundations';
import './js/modals';
import './js/scroll-up-btn';
import './js/farebase/service';
import './js/firebase-modal';
import './js/dark-theme';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgzxMxAoiph8ATmsqc1LmxJqycbI4-drA',
  authDomain: 'team-project-books-b039a.firebaseapp.com',
  databaseURL:
    'https://team-project-books-b039a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'team-project-books-b039a',
  storageBucket: 'team-project-books-b039a.appspot.com',
  messagingSenderId: '512231620356',
  appId: '1:512231620356:web:e1a401795113a0a48b9a51',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
