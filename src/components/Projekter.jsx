import { useState } from "react";
import "../css/projekter.css";
import PubhubLogo from "../assets/pubhub-ikon.svg";
import AkvarieLogo from "../assets/akvarie-display/akvarie-ikon.svg";
import LegepladsLogo from "../assets/legeplads-ikon.svg";

/* display imports */
import PubhubDisplay from "./PubhubDisplay";
import AkvarieDisplay from "./AkvarieDisplay";
import LegepladsDisplay from "./LegepladsDisplay";

export default function Projekter() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projekt-container">
      <div className="knap-sektion">
        <div className="knap-tekst-container">
          <button className="knap" onClick={() => setActiveProject("Akvarie")}>
            <img src={AkvarieLogo} alt="grøn fisk" />
          </button>
          <p>Storcenter Nord spildesign 2025</p>
        </div>

        <div className="knap-tekst-container">
          <button className="knap" onClick={() => setActiveProject("Pubhub")}>
            <img src={PubhubLogo} alt="Pubhub projekt logo" />
          </button>
          <p>PubHub app-koncept 2026</p>
        </div>

        <div className="knap-tekst-container">
          <button
            className="knap"
            onClick={() => setActiveProject("Legeplads")}
          >
            <img src={LegepladsLogo} alt="græskar mand i overalls" />
          </button>
          <p>Legeplads</p>
        </div>
      </div>

      {activeProject && (
        <div className="overlay">
          <button className="luk-knap" onClick={() => setActiveProject(null)}>
            <p className="luk-knap-x">X</p>
          </button>

          {activeProject === "Pubhub" && <PubhubDisplay />}
          {activeProject === "Akvarie" && <AkvarieDisplay />}
          {activeProject === "Legeplads" && <LegepladsDisplay />}
        </div>
      )}
    </div>
  );
}
