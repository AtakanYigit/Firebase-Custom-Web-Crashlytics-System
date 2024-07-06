import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc}  from "firebase/firestore";

const firebaseConfig = {
    apiKey:             "",
    authDomain:         "",
    projectId:          "",
    storageBucket:      "",
    messagingSenderId:  "",
    appId:              ""
};
  
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);

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
    setDoc(doc(db, "ErrorLogs", logName), {log})
        .catch((error) => {
            console.error("Error sending message: ", error);
        });
}