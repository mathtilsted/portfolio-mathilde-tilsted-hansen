import PubProto1 from "../assets/pubhub-proto-1.svg";
import PubProto2 from "../assets/pubhub-proto-2.svg";
import PubProto3 from "../assets/pubhub-proto-3.svg";
import PubProto4 from "../assets/pubhub-proto-4.svg";
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
          designe og kode en app der manglede på det nuværende marked. <br />
          <br />I samarbejde med en af mine medstuderende udviklede vi appen
          PubHHub. En app der er lavet til de unges studerende i Aarhus, som
          gerne vil holde sig ajoure med hvad der sker i byen af events på
          barerne. Appen er specielt lavet til de studerende som vil se og gemme
          de events de vil til senere på ugen, den er bygget op om et levende og
          sjovt design der inviterer til fest og natteliv. Særligt ved appen er
          at den er "drunk-safe" et udtryk vi opfandt undervejs, da appen har
          forstørret UI i form af knapper og et meget simpelt interface, da
          denne skal benyttes midt om natten og i ikke-ædru tilstand.
        </p>
      </div>
      <div className="bund-container">
        <img src={PubProto1} alt="første prototype skærm" />
        <img src={PubProto2} alt="anden prototype skærm" />
        <img src={PubProto3} alt="tredje prototype skærm" />
        <img src={PubProto4} alt="fjerde prototype skærm" />
      </div>
    </>
  );
}
