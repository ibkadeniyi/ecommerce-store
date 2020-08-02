import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAFgkkuNgk_dVB_Dj3X05EKNcsOEdEvJzE",
    authDomain: "ecommerse-store.firebaseapp.com",
    databaseURL: "https://ecommerse-store.firebaseio.com",
    projectId: "ecommerse-store",
    storageBucket: "ecommerse-store.appspot.com",
    messagingSenderId: "734974468906",
    appId: "1:734974468906:web:609c3533b2965381023453",
    measurementId: "G-79N40QGT3M"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;