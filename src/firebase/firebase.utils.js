import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUL8r-JrLfBOOpFjbPXiXKQQVnULBRcvA",
  authDomain: "crwn-db-fdf29.firebaseapp.com",
  databaseURL: "https://crwn-db-fdf29.firebaseio.com",
  projectId: "crwn-db-fdf29",
  storageBucket: "crwn-db-fdf29.appspot.com",
  messagingSenderId: "842894252941",
  appId: "1:842894252941:web:d05e0fb586950c63ebbbc4",
  measurementId: "G-4K77D49JTX"
};

// checking user if already exist or not. If not then create
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userRef;
};

// TO add local into firebase database
export const addCollectionAndDocumets = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollectios = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollectios.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
