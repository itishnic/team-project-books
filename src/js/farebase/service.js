// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCK9mH8GgpmEiaZIblokYTZ2aP61OZbdmk',
  authDomain: 'team-project-books.firebaseapp.com',
  projectId: 'team-project-books',
  storageBucket: 'team-project-books.appspot.com',
  messagingSenderId: '1583734977',
  appId: '1:1583734977:web:ece6e7e1e97dd4085bf440',
  measurementId: 'G-Q7KC86TSVP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
