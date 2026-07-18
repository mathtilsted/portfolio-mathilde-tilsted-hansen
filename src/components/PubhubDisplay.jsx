import "../css/display.css";

export default function Pubhub() {
  return (
    <>
      <div className="top-container">
        <p className="overlay-titel">PubHub appkoncept 2026</p>
        <a
          className="display-knap"
          href="https://eaa25mtha.github.io/webapp-eksamen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prøv appen her
        </a>
      </div>
      <div className="midt-container">
        <p className="display-tekst">
          Denne case handlede om udviklingen af et app koncept. Formålet var at
          lave et koncept der kunne skabe værdi for en specifik målgruppe, og
          som var en app der manglede.
        </p>
      </div>
      <div className="bund-container"></div>
    </>
  );
}
