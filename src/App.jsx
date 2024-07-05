import {Suspense}     from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home           from "./pages/Home/Home";
import Page1          from "./pages/Page1/Page1";
import {setCrashLog}  from "./firebase";
import crashlogs      from "./pages/CrashLogs/CrashLogs";
import "./App.scss";

const App = () =>{
    return(
        <Router>
            <div className = "App">
                <Suspense fallback = {setCrashLog("App", window.location.href, new Error("Loading Error"), "Unknown Page")}>
                    <Switch>
                        <Route path = "/" exact component = {Home}/>
                        <Route path = "/page1" exact component = {Page1}/>
                        <Route path = "/crashLogs" exact component = {crashlogs}/>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;