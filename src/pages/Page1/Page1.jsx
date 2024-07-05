import {Link} from "react-router-dom";

const Page1 = () =>{
    return(
        <div className = "Page1">
            <h1>This is Page1</h1>
            <Link to = "/">Go to Home Page</Link>
        </div>
    );
}

export default Page1;