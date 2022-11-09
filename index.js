// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyC9IFN_gsJbH-vsNw2bghWq5Shp3zMO3y8',
  authDomain: 'grocies-700b7.firebaseapp.com',
  projectId: 'grocies-700b7',
  storageBucket: 'grocies-700b7.appspot.com',
  messagingSenderId: '616117787461',
  appId: '1:616117787461:web:8ec17f04f27cfe51fbfc2c',
  measurementId: 'G-KVEGFW5T0Q',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content
  $(this).text('saved');
  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('mylist').add({
      item: value, //?
    });

    //practice new collection
    /* 
    firebase.firestore().collection('mynamelist').add({
      name: value, //?
    });
*/
  });
});
