import ProjektLayout from "../components/ProjektLayout";

export default function Akvarie() {
  return (
    <ProjektLayout
      label="Storcenter Nord · Eksamensprojekt 2025"
      title="Akvarie"
      intro="Et interaktivt læringsspil designet til børn i alderen 2–3 år, med fokus på leg, læring og brugeroplevelse."
      introLeft="I denne case arbejdede jeg med spildesign til børn, der leger ved akvariet i bunden af Storcenter Nord. Målet var at skabe et legende univers, der kunne fange børnenes opmærksomhed samtidig med, at spillet formidlede viden om havet."
      introRight="Projektet er en videreudvikling og optimering af et tidligere semesterprojekt. Som en del af mit eksamensprojekt valgte jeg at redesigne spillet fra bunden med udgangspunkt i de erfaringer og idéer, jeg havde samlet op under det oprindelige projekt."
      buttonText="Prøv spillet her"
      buttonLink="https://eaa25mtha.github.io/eksamens-projekt-mathilde/"
      heroImage={null}
      heroImageAlt="Designkomponenter fra akvariespillet"
      prototypes={
        [
          /*{
          src: AkvarieProto1,
          alt: "Første prototype af akvariespillet",
        },
        {
          src: AkvarieProto2,
          alt: "Anden prototype af akvariespillet",
        },*/
        ]
      }
      reflectionTitle="Design til de mindste"
      reflectionText="Jeg tog udgangspunkt i børn i aldersgruppen 2–3 år. Det er en meget ung, men også spændende og livlig målgruppe at designe til. Under processen arbejdede jeg blandt andet med designprincipper for børn og justerede knapper, hastigheder, farver og interaktioner efter målgruppen.

Jeg brugertestede min prototype på en lille gruppe børn i en vuggestue. Det var interessant at se, hvordan de forsøgte at forstå spillet på deres egne præmisser. De klikkede eksempelvis på sten, forsøgte at flytte tangen og viste stor interesse for elementer, som jeg selv havde betragtet som mere æstetiske end funktionelle.

Brugertesten udfordrede mine egne antagelser om, hvordan børnene ville interagere med spillet. Det blev derfor en vigtig del af den videre udvikling og gav mig samtidig erfaring med at designe til en målgruppe, der har helt andre forudsætninger end mig selv."
      reflectionImage={null}
      reflectionImageAlt="Brugertest af akvariespillet"
    />
  );
}
