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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if (!snapShot.exist) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          
          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch (error) {
            console.log('error creating user', error.message);
          }
      }
      return userRef;


  };

  export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    
    return await batch.commit()

  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    // console.log(transformedCollection);
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});

  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;