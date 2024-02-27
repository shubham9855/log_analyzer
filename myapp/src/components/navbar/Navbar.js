import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-icon">
            LOG - ANALYZER
          </Link>
        </div>
        <div className="navbar-mail">
          <Link to="/login" className="fav-icon">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
