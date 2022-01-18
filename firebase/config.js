import  {initializeApp} from "firebase/app";
import  {getAuth} from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAb6vf1dc2SHSoyNMjhW-BHEo3m8xwYWU8",
  authDomain: "instantrecipes-ad573.firebaseapp.com",
  databaseURL: "https://instantrecipes-ad573-default-rtdb.firebaseio.com",
  projectId: "instantrecipes-ad573",
  storageBucket: "instantrecipes-ad573.appspot.com",
  messagingSenderId: "134586915518",
  appId: "1:134586915518:web:d558d0ff57de0b0441dcef",
  measurementId: "${config.measurementId}"
};

const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)
const database = getDatabase(firebase)


export {auth, database}


/*
try {
    if (!firebase.apps.length) {

      firebase.initializeApp(firebaseConfig);

    }
  } catch(error) {
    console.log(error)
  }


  export { firebase };
*/