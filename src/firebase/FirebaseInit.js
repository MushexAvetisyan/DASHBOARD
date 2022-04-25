import firebase from "firebase/compat/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJ_7wjXuNEyuBRp7cReRNFzX7nNhg2wDM",
  authDomain: "transitprudashboard.firebaseapp.com",
  databaseURL: "https://transitprudashboard-default-rtdb.firebaseio.com",
  projectId: "transitprudashboard",
  storageBucket: "transitprudashboard.appspot.com",
  messagingSenderId: "1051140006822",
  appId: "1:1051140006822:web:25c2e293ae4559e0dee567",
  measurementId: "G-9MYQBX0ZS5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
