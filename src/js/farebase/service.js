// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './config';

// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCK9mH8GgpmEiaZIblokYTZ2aP61OZbdmk',
  authDomain: 'team-project-books.firebaseapp.com',
  projectId: 'team-project-books',
  storageBucket: 'team-project-books.appspot.com',
  messagingSenderId: '1583734977',
  appId: '1:1583734977:web:127e47f2217667205bf440',
  measurementId: 'G-KW9HCRM5RZ',
});
const auth = getAuth(firebaseApp);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});
