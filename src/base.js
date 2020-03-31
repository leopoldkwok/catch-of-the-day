import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlNdKsK2fEwnfXZ_MuWwvwv2vBcwAR4Wo",
    authDomain: "catch-of-the-day-leo-2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-leo-2.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;