import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABTomGx96DRJRBdEpjoHmqifwXN8YPAjo",
    authDomain: "whatsapp-clone-aef87.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-aef87.firebaseio.com",
    projectId: "whatsapp-clone-aef87",
    storageBucket: "whatsapp-clone-aef87.appspot.com",
    messagingSenderId: "513047327350",
    appId: "1:513047327350:web:ae76f324e6762b044fe557",
    measurementId: "G-6GVC6Y7HKT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;