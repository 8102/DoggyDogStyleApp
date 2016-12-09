import firebase from 'firebase';

var firebaseConfig = {
  apiKey: " AIzaSyCdoJ5Q10uHkmUHMOiI_l-q05CmraQ0yMc",
  authDomain: "lab3-462d5.firebaseio.com",
  databaseURL: "https://lab3-462d5.firebaseio.com/",
  storageBucket: "gs://lab3-462d5.appspot.com",
};

firebase.initializeApp(firebaseConfig);
console.log('Firebase loaded !');
