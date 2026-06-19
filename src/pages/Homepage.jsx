import "../css/homepage.css";
import LottieModule from "lottie-react";
import BogstavAnimation from "../animationer/bogstav-anim.json";

export default function HomePage() {
  const Lottie = LottieModule.default;
  return (
    <>
      <div className="forside-animation">
        <Lottie animationData={BogstavAnimation} loop={false} />
      </div>
      <h1 className="under-titel">Multimediedesign studerende</h1>
    </>
  );
}
