import { Link } from "react-router-dom";
import Græskar from "../assets/blandet/pumpkin.svg";
import PubPlakat from "../assets/blandet/pubhub-plakat.png";
import Uterus from "../assets/blandet/uterus.svg";
import CoilPlakat from "../assets/blandet/coil-plakat.png";
import SoMePlakat from "../assets/blandet/some.png";
import Craft1 from "../assets/blandet/creative-craft-1.png";
import Craft2 from "../assets/blandet/creative-craft-2.png";
import "../css/display.css";

export default function Pubhub() {
  return (
    <>
      <div className="top-container">
        <p className="overlay-titel">Mine blandede projekter</p>
        <Link className="display-knap" to="/kontakt-mig">
          Kontakt mig
        </Link>
      </div>
      <div className="midt-container">
        <p className="display-tekst">
          Den her side er dedikeret til alle de små projekter som ikke
          nødvendigvis har været noget der skulle bruges, men som har givet mig
          god mulighed for at øve mig på forskellige teknikker og diverse
          programmer under min uddannelse. Her sigter jeg ikke efter at være
          perfekt, men i højere grad at jeg netop får prøvet krafter med nogle
          ting jeg ikke nødvendigvis er i mål med endnu, men i en process med.
          <br />
          <br />
          Hvis der er nogle spørgsmål til projekterne så skriv eller ring
          endelig til mig. Mine kontaktinformationer kan findes under "kontakt
          mig" siden eller ved at klikke på knappen ovenover.
        </p>
        <img
          className="pumpkin-img"
          src={Græskar}
          alt="Græskar mand lavet med vektorgrafik"
        />
      </div>
      <div className="blandede-projekter-container">
        <img src={PubPlakat} alt="pubhub plakat" />
        <img src={Craft1} alt="plakat med hjerne på" />
        <img src={CoilPlakat} alt="plakat fra projekt der hed Coil" />
        <img src={SoMePlakat} alt="lille SoMe post fra skoleprojekt" />
        <img src={Craft2} alt="fantasi hus lavet af en tekop" />
      </div>
      <div className="bund-container">
        <p className="display-tekst-bund">
          Jeg kan godt lide at arbejde med forskellige stilarter. Jeg kan rigtig
          godt lide at arbejde med det "animerede look" når jeg designer og
          oplever tit at det er den stil jeg vender mest tilbage til. Mit
          seneste projekt "PubHub" handlede dog i højere grad om neon og fest
          æstetikken. Det var vildt fedt at arbejde så meget med farve og spræl,
          det gjorde en glad at sidde og nørkle med. Det er helt sikkert
          farvespillet og det fantasifulde der gør det sjovt at designe de
          animerede og levende ting, men jeg nyder også et simpelt og smukt
          design, hvor man ikke forstyrres af for mange inputs undervejs. Det er
          en svær balancegang, men det er også det der gør det sjovt.
        </p>
        <img src={Uterus} alt="livmoder illustration med dumbells i hænderne" />
      </div>
    </>
  );
}
