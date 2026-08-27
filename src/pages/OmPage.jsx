import Mig2 from "../assets/om-mig/mig2.jpeg";
import Mig3 from "../assets/om-mig/mig3.jpeg";
import Mig4 from "../assets/om-mig/mig4.jpeg";
import FlipCard from "../components/FlipCard";

export default function OmPage() {
  return (
    <>
      <div className="sektion">
        <div className="titel">
          <h3>Hvem er jeg?</h3>
        </div>
        <p className="om-mig-under-titel">
          Klik på billederne og lær lidt om mig
        </p>
        <div className="billed-container">
          <FlipCard
            image={Mig2}
            title="Musiker"
            text="I min fritid er jeg amatørmusiker og spiller i Århus Brass Band. 
            Jeg bruger meget tid på at øve og forberede mig til koncerter og konkurrencer. 
            Jeg er født ind i en musik familie så jeg ser det som en kæmpe del af den jeg er blevet til.
            Musik er sindssygt vigtigt for mig, og jeg synes det er mega cool at kunne læse noder og opleve musikken indefra ved selv at spille den."
          />
          <FlipCard
            image={Mig3}
            title="Crafty og effektiv"
            text="Jeg kan lidt af hvert.
            Jeg hækler og strikker. 
            Jeg spiller musik, kan sy en knap på, er lige begyndt at øve mig i tegneprogrammet Procreate, jeg kan lave mad, jeg koder og mange andre skøre ting.
            Jeg vil beskrive mig selv som crafty frem for kreativ fordi jeg ikke nødvendigvis er den første til at få ideen, men jeg arbejder rigtig godt så snart første beslutning er taget, også kører vi derudaf."
          />
          <FlipCard
            image={Mig4}
            title="Ordentlig"
            text="Jeg ville elske at skrive at jeg er en håbløs kreativ sjæl der forsvinder ind i boblen når jeg kreerer ting.
            Det er jeg på sin vis også. Jeg har super god koncentration når jeg skal løse opgaver, men mest af alt er jeg ordentlig. 
            Jeg tager mine ansvar utroligt seriøst og jeg synes det er mega fedt at have overblik og have overskud til, at gøre tingene ordentligt.
            Jeg gør altid mit bedste."
          />
        </div>
      </div>
    </>
  );
}
