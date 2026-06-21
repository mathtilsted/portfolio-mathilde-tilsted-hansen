import "../css/homepage.css";
import LottieModule from "lottie-react";
import BogstavAnimation from "../animationer/bogstav-anim.json";
import KompetenceAnimation from "../animationer/kompetencer-anim.json";
import Projekter from "../components/Projekter";

export default function HomePage() {
  const Lottie = LottieModule.default;
  return (
    <div className="homepage-container">
      <div className="navne-animation">
        <Lottie animationData={BogstavAnimation} loop={false} />
      </div>
      <h1 className="under-titel">Multimediedesign studerende</h1>
      <Projekter />
      <div>
        <Lottie animationData={KompetenceAnimation} loop={true} />
      </div>
    </div>
  );
}
