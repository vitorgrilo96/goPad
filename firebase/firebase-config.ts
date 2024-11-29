import { initializeApp } from 'firebase/app';
import { 
    initializeAuth, 
    //@ts-ignore 
    getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA1_HgK08-sIqyXT5ihdTLgbi0_pmurWeU',
  authDomain: 'gopad-592e3.firebaseapp.com',
  projectId: 'gopad-592e3',
  appId: '1:843504155018:android:f1f7aca10db254442fb073',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
