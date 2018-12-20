import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCHYJg1A1YClEujsExtgOe1f_E_96wa4io",
  authDomain: "awesome-planes.firebaseapp.com",
  databaseURL: "https://awesome-planes.firebaseio.com",
  projectId: "awesome-planes",
  storageBucket: "awesome-planes.appspot.com",
  messagingSenderId: "36045945814"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 