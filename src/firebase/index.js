import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDyDkRMU2toGt2rZyYqI551JygT9V2YBXA",
  authDomain: "kurs-dispatcher-4a041.firebaseapp.com",
  projectId: "kurs-dispatcher-4a041",
  storageBucket: "kurs-dispatcher-4a041.appspot.com",
  messagingSenderId: "457062861408",
  appId: "1:457062861408:web:d22b108cbd3a541c085105",
  measurementId: "G-J2Q5XY05R6"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }