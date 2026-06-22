import { useState } from "react";
import "../css/projekter.css";
import PubhubLogo from "../assets/pubhub-ikon.svg";
import AkvarieLogo from "../assets/akvarie-ikon.svg";
import LegepladsLogo from "../assets/legeplads-ikon.svg";

/* display imports */
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
          <img src={AkvarieLogo} alt="grøn fisk" />
        </button>

        <button className="knap" onClick={() => setActiveProject("Legeplads")}>
          <img src={LegepladsLogo} alt="græskar mand i overalls" />
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
