import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "country-weather-application.firebaseapp.com",
  projectId: "country-weather-application",
  storageBucket: "country-weather-application.appspot.com",
  messagingSenderId: "628850533843",
  appId: "1:628850533843:web:7163a4f5ae7866afc87b26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error during login:", error);
    alert(error.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

const addFavouriteToFirebase = async (uid, name) => {
  try {
    await addDoc(collection(db, `users/${uid}/favourites`), { name });
    console.log("Favourite added to Firebase");
  } catch (error) {
    console.error("Error adding favourite to firebase:", error);
  }
};

const removeFavouriteFromFirebase = async (uid, name) => {
  try {
    if (!name) {
      console.error("Error removing favourite from firebase: Name parameter undefined");
      return;
    }
    const q = query(
      collection(db, `users/${uid}/favourites`),
      where("name", "==", name)
    );
    const querySnapshot = await getDocs(q);
    
    // Using Promise.all to await all deletions
    await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        await deleteDoc(doc.ref);
        console.log("Favourite removed from Firebase");
      })
    );
  } catch (error) {
    console.error("Error removing favourite from firebase:", error);
  }
};

const clearFavouritesFromFirebase = async (uid) => {
  try {
    const q = query(collection(db, `users/${uid}/favourites`));
    const querySnapshot = await getDocs(q);
    
    // Using Promise.all to await all deletions
    await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        await deleteDoc(doc.ref);
        console.log("Favourite cleared from Firebase");
      })
    );
  } catch (error) {
    console.error("Error clearing favourites from firebase:", error);
  }
};

export {
  addFavouriteToFirebase,
  auth,
  clearFavouritesFromFirebase,
  db,
  loginWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
  removeFavouriteFromFirebase,
};
