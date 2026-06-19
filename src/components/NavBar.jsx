import { NavLink } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <header className="nav-container">
      <nav className="nav">
        <NavLink to="/" className="link">
          Homepage
        </NavLink>
        <NavLink to="/projekter" className="link">
          Projekter
        </NavLink>
        <NavLink to="/kontakt mig" className="link">
          Kontakt mig
        </NavLink>
        <NavLink to="/om mig" className="link">
          Om mig
        </NavLink>
      </nav>
    </header>
  );
}
