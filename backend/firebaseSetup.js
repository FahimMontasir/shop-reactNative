import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore"
import { firebaseConfig } from "./firebase.config";


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, storage, db }