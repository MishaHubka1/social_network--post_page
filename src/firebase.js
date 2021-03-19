import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDeX-zydY-9MqbmeDiJNwAjfZo7pmUMDgo",
    authDomain: "lk-react-40849.firebaseapp.com",
    projectId: "lk-react-40849",
    storageBucket: "lk-react-40849.appspot.com",
    messagingSenderId: "628234859357",
    appId: "1:628234859357:web:c6caf3e32f370aca636eb4",
    measurementId: "G-ME1Y0HZ2WV"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth};