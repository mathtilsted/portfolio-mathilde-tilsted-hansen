//import AkvarieProto1 from "../assets/akvarie-proto-1.png";
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
      <div className="midte">
        <p>
          I denne case arbejdede vi med spildesign til børn der leger ved
          akvariet i bunden af StorcenterNord. Vi arbejdede innovativt og
          legende, da spillene skulle fange børnenes opmærksomhed, samtidig med
          at de formidlede viden om havet til børnene.
        </p>
        <p>
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
      </div>
      <div className="bund">
        {/* her skal de to prototype screenshots vises */}
      </div>
    </div>
  );
}
