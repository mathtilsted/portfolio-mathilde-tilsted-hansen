import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/M.png";

export default function NavBar() {
  return (
    <header className="nav-container">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <nav className="nav">
        <NavLink to="/projekter" className="link">
          Projekter
        </NavLink>
        <NavLink to="/om-mig" className="link">
          Om mig
        </NavLink>
        <NavLink to="/kontakt-mig" className="link">
          Kontakt mig
        </NavLink>
      </nav>
    </header>
  );
}
