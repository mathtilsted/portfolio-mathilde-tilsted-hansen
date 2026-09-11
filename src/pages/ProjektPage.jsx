//import { Link } from "react-router-dom";
import "../css/projekt-page.css";
import Baggrund4 from "../assets/baggrunde/baggrund4.png";

export default function ProjektPage() {
  return (
    <>
      <img className="baggrund-projekt-siden" src={Baggrund4} alt="" />
      <main className="projekter-grid">
        <div className="projekt-card projekt-placeholder">
          <span>Projekt 01</span>
        </div>

        <div className="projekt-card projekt-placeholder">
          <span>Projekt 02</span>
        </div>

        <div className="projekt-card projekt-placeholder">
          <span>Projekt 03</span>
        </div>

        <div className="projekt-card projekt-placeholder">
          <span>Projekt 04</span>
        </div>

        <div className="projekt-card projekt-placeholder">
          <span>Projekt 05</span>
        </div>

        <div className="projekt-card projekt-placeholder">
          <span>Projekt 06</span>
        </div>
      </main>
    </>
  );
}
