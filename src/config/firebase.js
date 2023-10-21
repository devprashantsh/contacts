import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
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
  signout({ onSuccess = () => {}, onError = () => {} }) {
    signOut(this.auth)
      .then(() => {
        onSuccess();
      })
      .catch((error) => {
        onError(error);
      });
  }
  async addDataToDb(data, dbname) {
    try {
      const _data = {
        ...data,
        createdAt: serverTimestamp(),
      };
      const docRef = await addDoc(collection(this.db, dbname), _data);
      return { success: true, message: `Data added with Id: ${docRef.id}` };
    } catch (error) {
      console.error("Error adding data: ", error);
      return { success: false, message: error };
    }
  }

  async getDataFromDb(dbName) {
    let querySnapshot = null;
    try {
      querySnapshot = await getDocs(collection(this.db, dbName));
      console.log({querySnapshot})

      // if (!querySnapshot || !querySnapshot?.empty) {
      //   console.log("no data found");
      //   return []
      // }
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log({docs})
      return docs;
    } catch (err) {
      console.log(`Error getting documents`, err);
      return [];
    }
  }
}

export default new FirebaseApp();
