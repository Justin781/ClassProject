import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIlAtxjzWi6er97ejOsvvTdyaoawXLZ0M",
    authDomain: "chatsju-84ac2.firebaseapp.com",
    projectId: "chatsju-84ac2",
    storageBucket: "chatsju-84ac2.appspot.com",
    messagingSenderId: "881502706177",
    appId: "1:881502706177:web:040b0460afb8d47069fe00",
    measurementId: "G-8GT3CSZZDP"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
auth.setPersistence(browserSessionPersistence);

export { firestore, auth };
