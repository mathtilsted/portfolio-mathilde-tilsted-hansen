import { Link } from "react-router-dom";
import "../css/projekt-page.css";

import PubhubLogo from "../assets/pubhub-ikon.svg";
import AkvarieLogo from "../assets/storcenternord-ikon.svg";
import BlandetLogo from "../assets/blandet-ikon.svg";
//import Baggrund from "../assets/baggrunde/baggrund2.png";

export default function ProjektPage() {
  return (
    <main className="projekter-grid">
      <div className="projekt-card">
        <Link className="projekt-card-link" to="/pubhub">
          <img src={PubhubLogo} alt="PubHub projekt logo" />
        </Link>

        <div className="projekt-card-info">
          <h2>PubHub</h2>
          <p>App-koncept · 2026</p>
        </div>
      </div>

      <div className="projekt-card">
        <Link className="projekt-card-link" to="/akvarie">
          <img src={AkvarieLogo} alt="Storcenter Nord projekt logo" />
        </Link>

        <div className="projekt-card-info">
          <h2>Akvarie</h2>
          <p>Spildesign · 2025</p>
        </div>
      </div>

      <div className="projekt-card">
        <Link className="projekt-card-link" to="/blandede-projekter">
          <img src={BlandetLogo} alt="Blandede projekter logo" />
        </Link>

        <div className="projekt-card-info">
          <h2>Blandede projekter</h2>
          <p>Eksperimenter · Øvelser · 2025–2026</p>
        </div>
      </div>
    </main>
  );
}
