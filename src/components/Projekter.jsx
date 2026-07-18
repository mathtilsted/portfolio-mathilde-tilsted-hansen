import { useState } from "react";
import "../css/projekter.css";
import PubhubLogo from "../assets/pubhub-ikon.svg";
import AkvarieLogo from "../assets/storcenternord-ikon.svg";
import BlandetLogo from "../assets/blandede-projekter-ikon.svg";

/* display imports */
import PubhubDisplay from "./PubhubDisplay";
import AkvarieDisplay from "./AkvarieDisplay";
import BlandetDisplay from "./BlandetDisplay";

export default function Projekter() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projekt-container">
      <div className="knap-sektion">
        <div className="knap-tekst-container">
          <button className="knap" onClick={() => setActiveProject("Akvarie")}>
            <img src={AkvarieLogo} alt="Storcenter Nords logo" />
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
          <button className="knap" onClick={() => setActiveProject("Blandet")}>
            <img src={BlandetLogo} alt="græskar mand i overalls" />
          </button>
          <p>Blandede projekter</p>
        </div>
      </div>

      {activeProject && (
        <div className="overlay">
          <button className="luk-knap" onClick={() => setActiveProject(null)}>
            <p className="luk-knap-x">X</p>
          </button>

          {activeProject === "Pubhub" && <PubhubDisplay />}
          {activeProject === "Akvarie" && <AkvarieDisplay />}
          {activeProject === "Blandet" && <BlandetDisplay />}
        </div>
      )}
    </div>
  );
}
