import Græskar from "../assets/blandet/pumpkin.svg";
import PubPlakat from "../assets/blandet/pubhub-plakat.png";
//import Uterus from "../assets/blandet/uterus.svg";
import CoilPlakat from "../assets/blandet/coil-plakat.png";
import SoMePlakat from "../assets/blandet/some.png";
import "../css/display.css";

export default function Pubhub() {
  return (
    <>
      <div className="top-container">
        <p className="overlay-titel">Mine blandede projekter</p>
      </div>
      <div className="midt-container">
        <p className="display-tekst">
          Den her side er dedikeret til alle de små projekter som ikke
          nødvendigvis har været noget der skulle bruges, men som har givet mig
          god mulighed for at øve mig på forskellige teknikker og diverse
          programmer under min uddannelse. Her sigter jeg ikke efter at være
          perfekt, men i højere grad at jeg netop får prøvet krafter med nogle
          ting jeg ikke nødvendigvis er i mål med endnu, men i en process med.
        </p>
        <img
          className="pumpkin-img"
          src={Græskar}
          alt="Græskar mand lavet med vektorgrafik"
        />
      </div>
      <div className="prototype-container">
        <img src={PubPlakat} alt="pubhub plakat" />
        <img src={CoilPlakat} alt="plakat fra projekt der hed Coil" />
        <img src={SoMePlakat} alt="lille SoMe post fra skoleprojekt" />
      </div>
      <div className="bund-container">
        <p className="display-tekst-bund">her er der mere tekst</p>
      </div>
    </>
  );
}
