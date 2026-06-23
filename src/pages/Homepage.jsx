import "../css/homepage.css";
import LottieModule from "lottie-react";
import BogstavAnimation from "../animationer/bogstav-anim.json";
import KompetenceAnimation from "../animationer/kompetencer-anim.json";
import Projekter from "../components/Projekter";

export default function HomePage() {
  const Lottie = LottieModule.default;
  return (
    <div className="homepage-container">
      <div className="hero-sektion">
        <Lottie animationData={BogstavAnimation} loop={false} />
        <h1 className="under-titel">Multimediedesign studerende</h1>
      </div>
      <div className="kompetencer">
        <Lottie animationData={KompetenceAnimation} loop={true} />
      </div>

      <div className="projekt-sektion">
        <p className="titel">Mine projekter</p>
        <Projekter />
      </div>
    </div>
  );
}
