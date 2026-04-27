import { Link } from "react-router-dom";

export default function Navbar () {
    return ( 
    <nav className="navbar">
     <div ClassName="navbar-container">
        <Link to="/" classname="navbar-brand">
        FitMart
        </Linkink>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/checkout">Cart</Link>
        </div>
        <div className="navbar-auth">
            <div className="navbar-auth-links">
                <Link to="/auth">Login</Link>
                <Link to="/auth">Sign Up</Link>
            </div>
        </div>
     </div>
    </nav>
    );
   
}