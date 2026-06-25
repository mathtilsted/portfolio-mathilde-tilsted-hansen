import NordLogo from "../assets/akvarie-display/storcenter-nord.svg";
import AkvarieImg from "../assets/akvarie-display/akvarie.svg";
import KlovnFisk from "../assets/akvarie-display/klovnfisk.svg";
import Laks from "../assets/akvarie-display/laks.svg";
import LillaFisk from "../assets/akvarie-display/lilla-fisk.svg";
import GreenTang from "../assets/akvarie-display/green-tang.svg";
import GreenTang2 from "../assets/akvarie-display/green-tang-2.svg";
import LillaTang from "../assets/akvarie-display/lilla-tang.svg";
import GulTang from "../assets/akvarie-display/gul-tang.svg";
import Sandbanke from "../assets/akvarie-display/sandbanke.svg";
import "../css/akvarie-display.css";

export default function Akvarie() {
  return (
    <div>
      <div className="top">
        <p className="overlay-titel">Storcenter Nord case 2025</p>
        <a
          className="akvarie-knap"
          href="https://eaa25mtha.github.io/eksamens-projekt-mathilde/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prøv spillet her
        </a>
      </div>
      <div className="case-beskrivelse">
        <img src={NordLogo} alt="Storcenter Nords logo" className="case-logo" />
        <p className="case-tekst">
          I denne case arbejdede vi med spildesign til børn der leger ved
          akvariet i bunden af StorcenterNord. Vi arbejdede innovativt og
          legende, da spillene skulle fange børnenes opmærksomhed, samtidig med
          at de formidlede viden om havet til børnene.
        </p>
      </div>
      <div className="midte">
        <p className="case-tekst">
          I mit spil tog jeg udgangspunkt i børn i aldersgruppen 2-3 år. En
          meget ung aldersgruppe, men også en virkelig spændende og livlig alder
          at designe til. Jeg dykkede ned i designprincipper til børn. Justering
          af knapper, hastigheder, farver mm. Jeg brugertestede mit produkt på
          en gruppe børn i vuggestue, der lærte jeg sindssygt mange ting.
          Spillet viser et akvarie med fisk der svømmer. Når man klikker på en
          fisk, siger den en lyd, eller fortæller noget. Børnene skal
          underholdes, men målet er ikke at fastholde dem, fordi de også skal
          lege frit og uden skærm.
        </p>
        <img
          src={AkvarieImg}
          alt="akvarie med fisk og tang i"
          className="akvarie"
        />
      </div>
      <div className="fiske-sektion">
        <img src={KlovnFisk} alt="klovnfisk" className="klovnfisk" />
        <img src={Laks} alt="laks" className="laks" />
        <img src={LillaFisk} alt="En lilla fisk" className="lilla-fisk" />
      </div>

      <div className="bund">
        <img src={GreenTang} alt="grønt tang" className="tang-1" />
        <img src={LillaTang} alt="lilla tang" className="tang-2" />
        <img src={GulTang} alt="gul tang" className="tang-3" />
        <img src={GreenTang2} alt="grønt tang" className="tang-4" />
        <img src={Sandbanke} alt="en gul sandbanke" className="sandbanke" />
      </div>
    </div>
  );
}
