 import * as firebase from './firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
	 apiKey: "AIzaSyB-tda7rHNIFbkydHt_U5i9S6e2QEH93GQ",
	 authDomain: "galeria-1fd37.firebaseapp.com",
	 projectId: "galeria-1fd37",
	 storageBucket: "galeria-1fd37.appspot.com",
	 messagingSenderId: "793979307272",
	 appId: "1:793979307272:web:4b0ad55c2919d53c9e58bd"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig); 

 const galeria = firebase.storage();
 const galeria_store = firebase.firestore();

 export { galeria, galeria_store };
 