import firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
  apiKey: 'AIzaSyBKEzyCJU6e3X6kBI4WaI4enHKy5dRDzwE',
  authDomain: 'booksanta-69b80.firebaseapp.com',
  databaseURL: 'https://booksanta-69b80-default-rtdb.firebaseio.com',
  projectId: 'booksanta-69b80',
  storageBucket: 'booksanta-69b80.appspot.com',
  messagingSenderId: '1093938386126',
  appId: '1:1093938386126:web:c5298ea4247b561494ec9f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
