import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVd7y3eVM_mrQraMiP4bgTxRhYqgICL68",
  authDomain: "crown-db-82b91.firebaseapp.com",
  databaseURL: "https://crown-db-82b91.firebaseio.com",
  projectId: "crown-db-82b91",
  storageBucket: "crown-db-82b91.appspot.com",
  messagingSenderId: "439038423361",
  appId: "1:439038423361:web:99679b82785ed02ed171c0",
  measurementId: "G-LWBFBKPJX4",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth,
  ...additionalData
) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error while creating new user", error);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promot: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
