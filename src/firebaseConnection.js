import firebase from 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyDlm916YGablug9Kmh4n9lACJTb5JT8aS8",
    authDomain: "sujeito-312bf.firebaseapp.com",
    databaseURL: "https://sujeito-312bf-default-rtdb.firebaseio.com",
    projectId: "sujeito-312bf",
    storageBucket: "sujeito-312bf.appspot.com",
    messagingSenderId: "1066235745669",
    appId: "1:1066235745669:web:42c6fb0001e088d50020ec",
    measurementId: "G-0HFH2LWYNW"
};


if(!firebase.apps.length){
    //open connection
    firebase.initializeApp(firebaseConfig);
}

export default firebase