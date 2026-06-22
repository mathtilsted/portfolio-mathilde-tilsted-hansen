import { useState } from "react";
import "../css/projekt.css";
import PubhubLogo from "../assets/pubhub-ikon.svg";

import PubhubDisplay from "./PubhubDisplay";
import AkvarieDisplay from "./AkvarieDisplay";
import LegepladsDisplay from "./LegepladsDisplay";

export default function Projekter() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projekt-container">
      <div className="knapper">
        <button className="knap" onClick={() => setActiveProject("Pubhub")}>
          <img src={PubhubLogo} alt="Pubhub projekt logo" />
        </button>

        <button className="knap" onClick={() => setActiveProject("Akvarie")}>
          Projekt 2
        </button>

        <button className="knap" onClick={() => setActiveProject("Legeplads")}>
          Projekt 3
        </button>
      </div>

      {activeProject && (
        <div className="overlay">
          <button className="luk-knap" onClick={() => setActiveProject(null)}>
            ✕
          </button>

          {activeProject === "Pubhub" && <PubhubDisplay />}
          {activeProject === "Akvarie" && <AkvarieDisplay />}
          {activeProject === "Legeplads" && <LegepladsDisplay />}
        </div>
      )}
    </div>
  );
}
