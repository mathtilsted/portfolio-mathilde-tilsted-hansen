import PubProto1 from "../assets/pubhub/proto-1.svg";
import PubProto2 from "../assets/pubhub/proto-2.svg";
import PubProto3 from "../assets/pubhub/proto-3.svg";
import PubProto4 from "../assets/pubhub/proto-4.svg";
import PubSkitse from "../assets/pubhub/skitse.svg";
import PubMoodboard from "../assets/pubhub/moodboard.png";
import "../css/display.css";

export default function Pubhub() {
  return (
    <>
      <div className="top-container">
        <p className="overlay-titel">PubHub app-koncept 2026</p>
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
          designe og kode en app der manglede på det nuværende marked. Første
          led i processen var idegenerering og koncept brainstorm, skarpt
          efterfulgt af brugertests og analoge skitser af de produkt vi ville
          udvikle. Det analoge arbejde specifikt, gav os en masse frihed til
          ikke at låse os fast i den første og bedste ide, men at arbejde videre
          med appen så vi kunne gøre den endnu federe. Designprocessen føltes
          utroligt fri fordi vi havde alting fysisk i hænderne i den første del
          af vores process.
        </p>
        <img className="skitse" src={PubSkitse} alt="analog skitse af appen" />
      </div>
      <div className="prototype-container">
        <img src={PubProto1} alt="første prototype skærm" />
        <img src={PubProto2} alt="anden prototype skærm" />
        <img src={PubProto3} alt="tredje prototype skærm" />
        <img src={PubProto4} alt="fjerde prototype skærm" />
      </div>
      <div className="bund-container">
        <p className="display-tekst-bund">
          I samarbejde med en af mine medstuderende udviklede vi så appen
          PubHHub. En app der er lavet til de unge studerende i Aarhus, som
          gerne vil holde sig ajoure med hvad der sker i byen af events på
          barerne. Appen er specielt lavet til de studerende som vil se og gemme
          de events de måske gerne vil deltage i senere på ugen, den er bygget
          op om et levende og sjovt design der inviterer til fest og natteliv.
          Særligt ved appen er at den er "drunk-safe" et udtryk vi opfandt
          undervejs, da appen har forstørret UI i form af knapper og et meget
          simpelt interface, da denne skal benyttes midt om natten og i
          ikke-ædru tilstand. Vi synes selv det var et vildt sjovt projekt at
          lave, fordi det var så frit, og dog var der nogle klare linjer vi
          arbejde indenfor, hvilket er en perfekt cocktail for en
          multimediedesigner.
        </p>
        <img
          className="moodboard-img"
          src={PubMoodboard}
          alt="moodboard for pubhub appen"
        />
      </div>
    </>
  );
}
