import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
        } from 'firebase/auth'

import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'



//copied from firebase website
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHExnPbNYQ72pk_c5LbDgzMTrtl1k0bKM",
  authDomain: "crwn-db-22d97.firebaseapp.com",
  projectId: "crwn-db-22d97",
  storageBucket: "crwn-db-22d97.appspot.com",
  messagingSenderId: "772091541406",
  appId: "1:772091541406:web:fb85b4b5b41242557c888f"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//initialising provider for google auth
const provider = new GoogleAuthProvider();

provider.setCustomParameters(
  {prompt:"select_account"}
)

export const auth= getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) =>{
  //cheching if there is existing data
  const userDocRef = doc(db,'users',userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log((await userSnapshot).exists());
  //exists method to check if it exist,boolean
}