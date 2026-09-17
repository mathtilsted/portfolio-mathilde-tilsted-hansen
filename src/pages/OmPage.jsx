import Mig1 from "../assets/om-mig/mig1.JPG";
import Mig2 from "../assets/om-mig/mig2.JPG";
import Mig3 from "../assets/om-mig/mig3.JPG";
import FlipCard from "../components/FlipCard";
import Baggrund from "../assets/baggrunde/baggrund1.png";

export default function OmPage() {
  return (
    <>
      <div className="sektion">
        <img className="baggrund" src={Baggrund} alt="" />
        <div className="titel">
          <h3>Hvem er jeg?</h3>
        </div>
        <p className="om-mig-under-titel">
          Klik på billederne og lær lidt om mig
        </p>
        <div className="billed-container">
          <FlipCard
            image={Mig1}
            title="Musiker"
            text="I min fritid er jeg amatørmusiker og spiller i Århus Brass Band. Det er en vaskeægte nørde hobby, og jeg elsker det."
          />
          <FlipCard
            image={Mig2}
            title="Crafty og effektiv"
            text="Jeg plejer at sige at jeg er Crafty frem for rent ud kreativ. Det er jeg også, men jeg elsker at være crafty 
            for det er altid når man er rigtig crafty at de bedste og skøreste løsninger opstår."
          />
          <FlipCard
            image={Mig3}
            title="Ordentlig"
            text=" Jeg tager mine ansvar utroligt seriøst og jeg synes det er mega fedt at have overblik og overskud til, at gøre tingene ordentligt.
            Jeg gør altid mit bedste."
          />
        </div>
      </div>
    </>
  );
}
