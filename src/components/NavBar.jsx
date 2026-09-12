import { NavLink } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar() {
  const logo = `${import.meta.env.BASE_URL}mth.svg`;

  return (
    <header className="nav-container">
      <NavLink to="/" aria-label="Gå til forsiden">
        <img src={logo} alt="Mathilde Tilsted Hansen" className="logo" />
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
