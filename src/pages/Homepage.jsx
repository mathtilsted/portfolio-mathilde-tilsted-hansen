//import LottieModule from "lottie-react";
//import KompetenceAnimation from "../animationer/kompetencer-anim.json";
import Baggrund3 from "../assets/baggrunde/baggrund3.png";
import Profil from "../assets/profil.jpeg";

export default function HomePage() {
  //const Lottie = LottieModule.default;

  return (
    <main>
      <img className="baggrund" src={Baggrund3} alt="" />

      <section className="homepage-indhold">
        <div className="homepage-hero">
          <img
            className="homepage-profil"
            src={Profil}
            alt="Portræt af Mathilde Tilsted Hansen"
          />

          <section className="homepage-tekst">
            <h1 className="homepage-titel">Mathilde Tilsted Hansen.</h1>
            <p>
              Hej! Det er mig der er Mathilde. Jeg skal i praktik i 10 uger til
              januar 2027. Jeg er multimediedesignstuderende på 3. semester på
              Erhvervsakademi Aarhus og brænder for at skabe løsninger der både
              er fede OG funktionelle. Jeg læser på IXD linjen på akademiet og
              har mine interesser i UX/UI samt React og Figma. Jeg vil gerne
              lære så meget jeg kan, så lad os få en snak om en praktikplads!
            </p>
          </section>
        </div>
      </section>
      {/* <div className="kompetencer">
        <Lottie animationData={KompetenceAnimation} loop={true} />
      </div>*/}
    </main>
  );
}
