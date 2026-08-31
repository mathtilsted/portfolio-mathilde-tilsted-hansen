import LottieModule from "lottie-react";
import KompetenceAnimation from "../animationer/kompetencer-anim.json";
import Baggrund3 from "../assets/baggrunde/baggrund3.png";

export default function HomePage() {
  const Lottie = LottieModule.default;

  return (
    <main>
      <img className="baggrund" src={Baggrund3} alt="" />

      <section className="homepage-indhold">
        <h1 className="homepage-titel">mathilde t. hansen</h1>

        <div className="kompetencer">
          <Lottie animationData={KompetenceAnimation} loop={true} />
        </div>
      </section>
    </main>
  );
}
