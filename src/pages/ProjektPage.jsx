import { Link } from "react-router-dom";
import "../css/projekt-page.css";
import PubhubLogo from "../assets/pubhub-ikon.svg";
import AkvarieLogo from "../assets/storcenternord-ikon.svg";
import BlandetLogo from "../assets/blandet-ikon.svg";

export default function ProjektPage() {
  return (
    <>
      <h1 className="projekt-page-titel">
        Vælg et projekt - se lidt af processen
      </h1>
      <main className="projekter-grid">
        <Link className="projekt-card" to="/pubhub">
          <img src={PubhubLogo} alt="PubHub projekt" />

          <div className="projekt-card-overlay">
            <h3>PubHub</h3>
            <p>App-koncept · 2026 · React · Figma</p>
          </div>
        </Link>

        <Link className="projekt-card" to="/akvarie">
          <img src={AkvarieLogo} alt="Akvarie projekt" />

          <div className="projekt-card-overlay">
            <h3>Akvarie-spillet</h3>
            <p>Interaktiv løsning · 2025 · JavaScript · Figma</p>
          </div>
        </Link>

        <Link className="projekt-card" to="/blandede-projekter">
          <img src={BlandetLogo} alt="Blandede projekter" />

          <div className="projekt-card-overlay">
            <h3>Blandede Projekter</h3>
            <p>Legeplads · Eksperimenter · Udfordring</p>
          </div>
        </Link>

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
