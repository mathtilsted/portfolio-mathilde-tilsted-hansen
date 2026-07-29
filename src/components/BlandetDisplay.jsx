import { Link } from "react-router-dom";
import LottieModule from "lottie-react";
import LoadingIndicator from "../animationer/loading-indicator.json";
import Græskar from "../assets/blandet/pumpkin.svg";
import PubPlakat from "../assets/blandet/pubhub-plakat.png";
import Uterus from "../assets/blandet/uterus.svg";
import CoilPlakat from "../assets/blandet/coil-plakat.png";
import SoMePlakat from "../assets/blandet/some.png";
import Craft1 from "../assets/blandet/creative-craft-1.png";
import Craft2 from "../assets/blandet/creative-craft-2.png";
import "../css/display.css";

export default function Pubhub() {
  const Lottie = LottieModule.default;
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
        <div className="projekt-kort">
          <img src={PubPlakat} alt="pubhub plakat" />

          <div className="projekt-overlay">
            <h3>PubHub</h3>
            <p>2026 - Figma & React</p>
          </div>
        </div>

        <div className="projekt-kort">
          <img src={Craft1} alt="plakat med hjerne på" />

          <div className="projekt-overlay">
            <h3>Creative Craft</h3>
            <p>2026 - Adobe Illustrator</p>
          </div>
        </div>

        <div className="projekt-kort">
          <img src={CoilPlakat} alt="plakat fra projekt der hed Coil" />

          <div className="projekt-overlay">
            <h3>COIL</h3>
            <p>2026 - Figma</p>
          </div>
        </div>

        <div className="projekt-kort">
          <img src={SoMePlakat} alt="lille SoMe post fra skoleprojekt" />

          <div className="projekt-overlay">
            <h3>SoMe opgave</h3>
            <p>2026 - Figma</p>
          </div>
        </div>

        <div className="projekt-kort">
          <img src={Craft2} alt="fantasi hus lavet af en tekop" />

          <div className="projekt-overlay">
            <h3>Creative Craft</h3>
            <p>2026 - Photoshop</p>
          </div>
        </div>

        <div className="projekt-kort">
          <Lottie animationData={LoadingIndicator} loop={true} />

          <div className="projekt-overlay">
            <h3>Loading indicator</h3>
            <p>2026 - Jitter</p>
          </div>
        </div>
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
