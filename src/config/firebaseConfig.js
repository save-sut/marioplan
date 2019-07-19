import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'

// Initial Firebase
var config = {
    apiKey: "AIzaSyDd8m_XZTm7poq7OrfWhZWjLalwjDI0C3s",
    authDomain: "save-sut-marioplan.firebaseapp.com",
    databaseURL: "https://save-sut-marioplan.firebaseio.com",
    projectId: "save-sut-marioplan",
    storageBucket: "",
    messagingSenderId: "408022317028",
    appId: "1:408022317028:web:4af1b03076f643b0"
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase