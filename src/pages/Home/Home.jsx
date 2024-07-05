import {setCrashLog} from "../../firebase";
import {Link} from "react-router-dom";

const Home = () =>{
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
        <div className = "Home">
            <h1>This is Home Page</h1>
            <Link to = "/page1">Go to Page 1</Link>
            <button onClick = {workingFunction}>Working Button</button>
            <button onClick = {brokenFunction}>Error Button</button>
        </div>
    );
}

export default Home;