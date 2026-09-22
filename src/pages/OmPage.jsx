import Mig1 from "../assets/om-mig/mig1.JPG";
import Mig2 from "../assets/om-mig/mig2.JPG";
import Mig3 from "../assets/om-mig/mig3.JPG";
import FlipCard from "../components/FlipCard";
import Baggrund from "../assets/baggrunde/baggrund1.png";
import "../css/om-mig.css";

export default function OmPage() {
  return (
    <>
      <div className="sektion">
        <img className="baggrund" src={Baggrund} alt="" />
        <div className="titel">
          <h2>Hvem er jeg?</h2>
        </div>
        <p className="om-mig-under-titel">
          3 fun facts om mig, vælg et billede og find en fun fact
        </p>
        <div className="billed-container">
          <FlipCard
            image={Mig1}
            title="Musiker"
            text="I min fritid er jeg amatørmusiker og spiller i Århus Brass Band. Jeg spiller et instrument der hedder euphonium. 
            Der er ingen der ved hvad det er for et instrument, men den er bedst sammenlignet med en lille tuba."
          />
          <FlipCard
            image={Mig2}
            title="Hækling"
            text="Jeg hækler en del og er i det hele taget glad for at bruge hænderne i sammenhæng med hovedet. Jeg har lige færdiggjort en sutteklud til min niece."
          />
          <FlipCard
            image={Mig3}
            title="Musical-stjerne-ønsket"
            text="Jeg ELSKER musicals. Da jeg var yngre ønskede jeg mig at være musical stjerne og skuespiller."
          />
        </div>
      </div>
    </>
  );
}
