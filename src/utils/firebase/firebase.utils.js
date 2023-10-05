import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    } from 'firebase/auth'

import{
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch, //check whether transaction is succesful
  query,
  getDocs
  } from 'firebase/firestore'



//copied from firebase website
//Firebase configuration
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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt:"select_account"
})

export const auth= getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)

export const db = getFirestore();


//adding collection to firestore 
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) =>{ //category is the collection key here
  const collectionRef = collection(db,collectionKey);  //get collection from the (within) db , collection specified as collectionKey
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=>{ //5 obj from shop data here
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef,object); //set dcoref location with obj value
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () =>{
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef) //returns object

  const querySnapshot = await getDocs(q); //executes query and returns a promise - snapshot of query results
  
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=> {
    const {title,items } = docSnapshot.data();
    acc[title.toLowerCase()] = items ;
    return acc;
  },{})
  return categoryMap;

}
//The docs property is an array of document snapshots that contain the data and metadata of each document in the query results. 
//The reduce method applies the callback function to each element of the array, starting from the initial value, and returns the final value of the accumulator. In this case, the callback function does the following:
//It destructures the current value (which is a document snapshot) into two variables: title and items, which correspond to the fields of each document in the collection.
//It assigns a new property to the accumulator object, using the lowercased title as the key and items as the value.
//It returns the accumulator object for the next iteration.
//The initial value of the accumulator is an empty object ({}), so the final result of calling reduce is an object that maps each title to its items.
//returns the categoryMap object output.

 export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) =>{
  //17 adding paramter to recieve additional info
  const userDocRef = doc(db,'users',userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);
  // console.log((userSnapshot).exists());
  //exists method to check if it exist,boolean

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInfo //overwrites if displayName is null to get displayName
      });
    } catch (error){
      console.log('there was an error',error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return;     //if email and password isnt available , return -function 
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
 onAuthStateChanged(auth,callback);