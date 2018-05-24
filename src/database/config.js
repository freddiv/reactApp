import * as firebase from 'firebase'; 

var config = {
    apiKey: "AIzaSyBtl0btp_edoNqVstZM0tpcHIZAuQRKc1k",
    authDomain: "photowall-cc977.firebaseapp.com",
    databaseURL: "https://photowall-cc977.firebaseio.com",
    projectId: "photowall-cc977",
    storageBucket: "photowall-cc977.appspot.com",
    messagingSenderId: "781399078085"
  };

firebase.initializeApp(config);

const database = firebase.database();
 export {database};