import {Link} from "react-router-dom";

const Page1 = () =>{
    const workingFunction = () =>{
        try{
            console.log("Working Button Clicked");
        }catch(error){
            setCrashLog("Home", window.location.href, error, "workingFunction");
        }
    }

    const brokenFunction = () =>{
        try{
            throw new Error("Broken Button Clicked");
        }catch(error){
            setCrashLog("Home", window.location.href, error, "brokenFunction");
        }
    }

    return(
        <div className = "Page1">
            <h1>This is Page1</h1>
            <Link to = "/">Go to Home Page</Link>
            <button onClick = {workingFunction}>Working Button</button>
            <button onClick = {brokenFunction}>Error Button</button>
        </div>
    );
}

export default Page1;