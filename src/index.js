import './js/header';
import './js/top-books';
import './js/books-by-category';
import './js/category-list';
import './js/foundations';
import './js/modals';
import './js/scroll-up-btn';
import './js/farebase/service';
import './js/firebase-modal';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCK9mH8GgpmEiaZIblokYTZ2aP61OZbdmk',
  authDomain: 'team-project-books.firebaseapp.com',
  projectId: 'team-project-books',
  storageBucket: 'team-project-books.appspot.com',
  messagingSenderId: '1583734977',
  appId: '1:1583734977:web:127e47f2217667205bf440',
  measurementId: 'G-KW9HCRM5RZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
