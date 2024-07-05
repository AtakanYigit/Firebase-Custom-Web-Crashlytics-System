import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc}  from "firebase/firestore";

const firebaseConfig = {
    apiKey:             "AIzaSyAhc_VUUT8-vr7b7Rl9ux-mraZYSAru5os",
    authDomain:         "firebas-crashlytics.firebaseapp.com",
    projectId:          "firebas-crashlytics",
    storageBucket:      "firebas-crashlytics.appspot.com",
    messagingSenderId:  "811091427578",
    appId:              "1:811091427578:web:eaaef5c62e7fe637a98943"
};
  
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

//Crash Log Submitting
export const setCrashLog = (component = "", url = "", error = {message: "", stack: ""}, extraInfo = "") => {
    const logName = new Date().toISOString().replace(/:/g, "-");

    const log = {
        component: component,
        url:       url,
        date:      new Date(),
        extraInfo: extraInfo,
        error: {
            message: error.message,
            stack: error.stack
        },
    };
    
    //Create doc with random id in Messages collection
    setDoc(doc(db, "Messages", logName), {log})
        .catch((error) => {
            console.error("Error sending message: ", error);
        });
}