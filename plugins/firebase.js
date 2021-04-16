import firebase from 'firebase/app'
import 'firebase/firebase-storage'
if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBbHGkNXbAS3KqeRig26wHv2x9n8z9BG30",
        authDomain: "kusoyarouchan.firebaseapp.com",
        databaseURL: "https://kusoyarouchan-default-rtdb.firebaseio.com",
        projectId: "kusoyarouchan",
        storageBucket: "kusoyarouchan.appspot.com",
        messagingSenderId: "344245084900",
        appId: "1:344245084900:web:fcc81c89fd04f72a32c2f1",
        measurementId: "G-F6YD2LZWNG"
    })
}

export default firebase