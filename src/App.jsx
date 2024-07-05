import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Page1 from "./pages/Page1/Page1";
import "./App.scss";

const App = () =>{
    return(
        <Router>
            <div className = "App">
                <Suspense fallback = {<div>Loading...</div>}>
                    <Switch>
                        <Route path = "/"  exact component = {Home}/>
                        <Route path = "/page1" exact component = {Page1}/>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;