import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <div className = "Home">
            <h1>This is Home Page</h1>
            <Link to = "/page1">Go to Page 1</Link>
        </div>
    );
}

export default Home;