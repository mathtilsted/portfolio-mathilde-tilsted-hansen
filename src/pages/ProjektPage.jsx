import { Link } from "react-router-dom";
import "../css/projekt-page.css";
import PubhubLogo from "../assets/pubhub-ikon.svg";
import AkvarieLogo from "../assets/storcenternord-ikon.svg";
import BlandetLogo from "../assets/blandet-ikon.svg";

export default function ProjektPage() {
  return (
    <div className="projekt-container">
      <div className="knap-sektion">
        <div className="knap-tekst-container">
          <Link className="knap" to="/pubhub">
            <img src={PubhubLogo} alt="Pubhub projekt logo" />
          </Link>
          <p className="knap-tekst">PubHub app-koncept 2026</p>
        </div>

        <div className="knap-tekst-container">
          <Link className="knap" to="/akvarie">
            <img src={AkvarieLogo} alt="Storcenter Nords logo" />
          </Link>
          <p className="knap-tekst">Storcenter Nord spildesign 2025</p>
        </div>

        <div className="knap-tekst-container">
          <Link className="knap" to="/blandede-projekter">
            <img src={BlandetLogo} alt="spørgsmålstegn" />
          </Link>
          <p className="knap-tekst">Blandede projekter</p>
        </div>
      </div>
    </div>
  );
}
