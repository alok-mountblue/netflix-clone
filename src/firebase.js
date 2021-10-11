// eslint-disable-next-line no-unused-vars
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyAqu6UNEruUye0XTkd92xc27LJYr83ubmc",
//   authDomain: "netflix-clone-a8f58.firebaseapp.com",
//   projectId: "netflix-clone-a8f58",
//   storageBucket: "netflix-clone-a8f58.appspot.com",
//   messagingSenderId: "624775541514",
//   appId: "1:624775541514:web:c460f314922b65a82e40f3"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const createUser = createUserWithEmailAndPassword();
// const existingUser = signInWithEmailAndPassword();

// export { auth, createUser, existingUser };
// export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqu6UNEruUye0XTkd92xc27LJYr83ubmc",
  authDomain: "netflix-clone-a8f58.firebaseapp.com",
  projectId: "netflix-clone-a8f58",
  storageBucket: "netflix-clone-a8f58.appspot.com",
  messagingSenderId: "624775541514",
  appId: "1:624775541514:web:c460f314922b65a82e40f3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
