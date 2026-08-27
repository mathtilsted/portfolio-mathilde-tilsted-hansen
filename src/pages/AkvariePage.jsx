import AkvarieProto1 from "../assets/akvarie/akvarie-proto-1.svg";
import AkvarieProto2 from "../assets/akvarie/akvarie-proto-2.svg";
import AkvarieTest from "../assets/akvarie/brugertest.png";
import AkvarieKomponenter from "../assets/akvarie/komponenter.png";

export default function Akvarie() {
  return (
    <>
      <div className="top-container">
        <p className="overlay-titel">Storcenter Nord case 2025</p>
        <a
          className="display-knap"
          href="https://eaa25mtha.github.io/eksamens-projekt-mathilde/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prøv spillet her
        </a>
      </div>
      <div className="midt-container">
        <p className="display-tekst">
          I denne case arbejdede vi med spildesign til børn der leger ved
          akvariet i bunden af Storcenter Nord. Vi arbejdede innovativt og
          legende, da spillene skulle fange børnenes opmærksomhed, samtidig med
          at de formidlede viden om havet til dem. Projekt her er en
          viderudvikling og optimering af det orginiale projekt vi arbejdede på.
          Dette er mit eksamensprojekt fra mit første semester på
          Multimediedesign uddannelsen. Kriteriet for denne eksamen var at tage
          et af sine tidligere projekter på semesteret og optimerer det med alle
          de detaljer og ændringer som man havde ønsket sig at lave fra det
          tidligere projekt. Jeg endte med at redesigne hele mit spil til et
          resultat jeg synes der passer rigtig godt til målgruppen.
        </p>
        <img
          className="komponent-img"
          src={AkvarieKomponenter}
          alt="komponenter fra akvariespillet"
        />
      </div>
      <div className="prototype-container">
        <img src={AkvarieProto1} alt="første prototype skærm" />
        <img src={AkvarieProto2} alt="anden prototype skærm" />
      </div>
      <div className="bund-container">
        <p className="display-tekst-bund">
          I mit spil tog jeg udgangspunkt i børn i aldersgruppen 2-3 år. En
          meget ung aldersgruppe, men også en virkelig spændende og livlig alder
          at designe til. Jeg dykkede ned i designprincipper til børn. Justering
          af knapper, hastigheder, farver mm. Undervejs i min process var jeg
          ude og brugerteste min prototype på en lille gruppe på 3 børn i en
          vuggestue. Det var super interressant at se børnene forsøge at regne
          spillet ud, de prøvede nemlig nogle helt andre ting af end jeg først
          havde tænkt de skulle. De klikkede på sten, prøvede at flytte tangen
          og var meget interesseret i alt det jeg så som det omkringliggende
          mere æstetiske end funktionelle design. Det er super fedt at blive
          udfordret på forskellige aldersgrupper, jeg synes det giver mig et
          bredt repetoire som designer.
        </p>
        <img
          className="brugertest-img"
          src={AkvarieTest}
          alt="brugertest udført med avkvarie spillet"
        />
      </div>
    </>
  );
}
