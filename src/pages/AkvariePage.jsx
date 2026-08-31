import ProjektLayout from "../components/ProjektLayout";
import AkvarieProto from "../assets/akvarie/akvarie-prototype.png";
import BrugerTest from "../assets/akvarie/brugertest.png";
import Visual1 from "../assets/akvarie/visual1.png";
import Visual2 from "../assets/akvarie/visual2.png";
import Visual3 from "../assets/akvarie/visual3.png";
import Visual4 from "../assets/akvarie/visual4.png";

export default function Akvarie() {
  return (
    <ProjektLayout
      label="Storcenter Nord · Eksamensprojekt 2025"
      title="Akvariet"
      intro="I dette projekt blev vi bedt om at skabe en interaktiv oplevelse til børn. Jeg skabte et spil til børn i alderen 2-3 år, hvor jeg fokuserede på leg, 
      enkelthed og hygge. Gennem projektet lærte jeg helt vildt meget om design til børn, 
      at forholde sig til en bestemt målgruppe og at justere når man har testet sin prototype."
      buttonText="Se live projekt"
      buttonLink="https://eaa25mtha.github.io/eksamens-projekt-mathilde/"
      heroImage={AkvarieProto}
      heroImageAlt="Designkomponenter fra akvariespillet"
      prototypes={[
        {
          src: Visual1,
          alt: "Første prototype af akvariespillet",
        },
        {
          src: Visual2,
          alt: "Første prototype af akvariespillet",
        },
        {
          src: Visual3,
          alt: "Første prototype af akvariespillet",
        },
        {
          src: Visual4,
          alt: "Brugertest af akvariespillet",
        },
      ]}
      reflectionTitle="Design til de mindste"
      reflectionText="Jeg tog udgangspunkt i børn i aldersgruppen 2–3 år. 
      Det er en meget ung, men også spændende og livlig målgruppe at designe til. Under processen arbejdede jeg blandt andet med designprincipper 
      for børn og justerede knapper, hastigheder, farver og interaktioner efter målgruppen. Det var vanvittigt lærerigt og udfordrede mig i at tænke anderledes som designer."
      reflectionImage={BrugerTest}
      reflectionImageAlt="Brugertest af akvariespillet"
    />
  );
}
