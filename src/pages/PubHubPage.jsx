import ProjektLayout from "../components/ProjektLayout";

export default function PubHubPage() {
  return (
    <ProjektLayout
      label="Webdesign · UX/UI"
      title="PubHub"
      intro="En digital oplevelse skabt med fokus på..."
      introLeft="Her beskriver jeg baggrunden for PubHub og den problemstilling projektet tog udgangspunkt i."
      introRight="Min rolle var blandt andet at arbejde med research, UX, visuel identitet og udvikling."
      buttonText="Se live projekt"
      buttonLink="#"
      heroImage={null}
      heroImageAlt="PubHub website"
      prototypes={
        [
          // {
          //   src: pubhubImage1,
          //   alt: "PubHub forside",
          // },
          // {
          //   src: pubhubImage2,
          //   alt: "PubHub menu",
          // },
        ]
      }
      reflectionTitle="Hvad lærte jeg?"
      reflectionText="Her kan jeg beskrive mine vigtigste erfaringer fra projektet."
      reflectionImage={null}
      reflectionImageAlt="PubHub refleksion"
    />
  );
}
