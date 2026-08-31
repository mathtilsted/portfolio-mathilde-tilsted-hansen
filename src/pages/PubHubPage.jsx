import ProjektLayout from "../components/ProjektLayout";
import Moodboard from "../assets/pubhub/moodboard.png";
import Visual1 from "../assets/pubhub/visual1.png";
import Visual2 from "../assets/pubhub/visual2.png";
import Visual3 from "../assets/pubhub/visual3.png";
import Visual4 from "../assets/pubhub/visual4.svg";
import PubLogo from "../assets/pubhub/pubLogo.svg";

export default function PubHubPage() {
  return (
    <ProjektLayout
      label="React · Webapp"
      title="PubHub"
      intro="En digital WebApp designet til unge studerende i Aarhus med det formål at give dem hele Aarhus natteliv i én app. Nemt, sjovt, underholdende og drunk-safe."
      buttonText="Se live projekt"
      buttonLink="#"
      heroImage={Moodboard}
      heroImageAlt="PubHub website"
      prototypes={[
        {
          src: Visual1,
          alt: "skal der en alt tekst på?",
        },
        {
          src: Visual2,
          alt: "",
        },
        {
          src: Visual3,
          alt: "",
        },
        {
          src: Visual4,
          alt: "",
        },
      ]}
      reflectionTitle="Hvad lærte jeg?"
      reflectionText="I PubHub projektet lærte jeg rigtig meget om at have god teknik bag det design vi laver. Det at sørge for at have et ordentligt designsystem der er til at finde rundt i for at have et godt og nemt samarbejde.
      Jeg lærte også en masse craft, fordi jeg sad og lavede rigtig mange af elementerne selv, da vi kun var 2 i gruppen, så det gav en masse ansvar og follow-through fordi tingene skulle fikses."
      reflectionImage={PubLogo}
      reflectionImageAlt="PubHub refleksion"
    />
  );
}
