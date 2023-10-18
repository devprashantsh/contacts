import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from ".";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

class FirebaseApp {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
    this.googleProvider = new GoogleAuthProvider();
  }

  signup({ email, password, onSuccess = () => {}, onError = () => {} }) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onSuccess(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        onError(error);
      });
  }
  signin({ email, password, onSuccess = () => {}, onError = () => {} }) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        onSuccess(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        onError(error);
      });
  }
  signout({  onSuccess = () => {}, onError = () => {} }) {
    signOut(this.auth).then(() => {
      // Sign-out successful.
      onSuccess()
    }).catch((error) => {
      // An error happened.
      onError(error)
    });
  }
  
}

export default new FirebaseApp();
