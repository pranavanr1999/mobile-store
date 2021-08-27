const firebaseConfig = {
  apiKey: "AIzaSyAstcY3Fkjk6dM1gNahppjm7dJc-jMiXCI",
  authDomain: "mobile-store-e9504.firebaseapp.com",
  projectId: "mobile-store-e9504",
  storageBucket: "mobile-store-e9504.appspot.com",
  messagingSenderId: "563706821839",
  appId: "1:563706821839:web:f5f4cb6a85897aafa88bba",
  measurementId: "G-QMELZ2NQ1Y"
};

firebase.initializeApp(firebaseConfig);

// initializes a global _db variable
const _db = firebase.database().ref().child('mobileSite');
const _storage = firebase.storage().ref().child('mobileSite');