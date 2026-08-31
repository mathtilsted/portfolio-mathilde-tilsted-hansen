import LottieModule from "lottie-react";
import KompetenceAnimation from "../animationer/kompetencer-anim.json";
import Baggrund from "../assets/baggrund.png";

export default function HomePage() {
  const Lottie = LottieModule.default;

  return (
    <main>
      <img className="homepage-baggrund" src={Baggrund} alt="" />

      <section className="homepage-indhold">
        <h1 className="homepage-titel">mathilde t. hansen</h1>

        <div className="kompetencer">
          <Lottie animationData={KompetenceAnimation} loop={true} />
        </div>
      </section>
    </main>
  );
}
