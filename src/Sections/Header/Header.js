import "./Header.css";
import { NavItem } from "../../Components/index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container1 navbar navbar-expand-md fixed-top ">
        <div className="container">
          <Link to="/home" className="navbar-brand">
            {" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <NavItem>
                <Link to="/home" className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/features" className="nav-link">
                  {" "}
                  Features{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/fournisseur" className="nav-link">
                  {" "}
                  Devenir Fournisseur
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/partenaire" className="nav-link">
                  {" "}
                  Devenir Partenaire{" "}
                </Link>
              </NavItem>
              <div className="navigate">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-divider"></li>
                  <NavItem>
                    <Link to="/login" className="nav-link">
                      {" "}
                      Login
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/signup" className="nav-link">
                      {" "}
                      Get Started{" "}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="./index-ar.html" className="nav-link">
                      عربي
                    </Link>
                  </NavItem>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
