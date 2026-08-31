import { Link } from "react-router-dom";
import LottieModule from "lottie-react";
import LoadingIndicator from "../animationer/loading-indicator.json";
import Græskar from "../assets/blandet/pumpkin.svg";
import PubPlakat from "../assets/blandet/pubhub-plakat.png";
import CoilPlakat from "../assets/blandet/coil-plakat.png";
import SoMePlakat from "../assets/blandet/some.png";
import Craft1 from "../assets/blandet/creative-craft-1.png";
import Craft2 from "../assets/blandet/creative-craft-2.png";
import Uterus from "../assets/blandet/uterus.svg";
import "../css/projekt-page.css";

export default function BlandedeProjekter() {
  const Lottie = LottieModule.default;

  const projects = [
    {
      title: "PubHub",
      meta: "2026 · Figma & React",
      image: PubPlakat,
      alt: "PubHub plakat",
    },
    {
      title: "Creative Craft",
      meta: "2026 · Adobe Illustrator",
      image: Craft1,
      alt: "Plakat med hjerne fra Creative Craft",
    },
    {
      title: "COIL",
      meta: "2026 · Figma",
      image: CoilPlakat,
      alt: "Plakat fra projektet COIL",
    },
    {
      title: "SoMe opgave",
      meta: "2026 · Figma",
      image: SoMePlakat,
      alt: "SoMe opslag fra skoleprojekt",
    },
    {
      title: "Loading indicator",
      meta: "2026 · Jitter",
      animation: true,
    },
    {
      title: "Vektorgrafik",
      meta: "2025 · Figma",
      image: Græskar,
      alt: "Græskarfigur lavet med vektorgrafik",
    },
    {
      title: "Vektorgrafik",
      meta: "2026 · Figma",
      image: Uterus,
      alt: "Illustration af livmoder med en dumbbell",
    },
    {
      title: "Creative Craft",
      meta: "2026 · Photoshop",
      image: Craft2,
      alt: "Fantasi hus lavet af en tekop",
    },
  ];

  return (
    <main className="projekt-side blandede-side">
      {/* hero sektion */}
      <section className="projekt-hero">
        <span className="projekt-label">
          Eksperimenter · Øvelser · Kreative projekter
        </span>

        <h1>Blandede projekter</h1>

        <p className="projekt-intro">
          En samling af mindre projekter, eksperimenter og kreative øvelser fra
          min uddannelse.
        </p>
      </section>

      {/* introduktion */}
      <section className="projekt-intro-section">
        <p>
          Denne side er dedikeret til de projekter, som ikke nødvendigvis har
          haft et færdigt produkt som mål. I stedet har de givet mig mulighed
          for at eksperimentere med forskellige teknikker, programmer og
          visuelle udtryk.
        </p>

        <p>
          Her handler det ikke om, at alting skal være perfekt. Jeg synes det er
          mindst lige så værdifuldt at prøve noget nyt, være nysgerrig og
          arbejde med ting, som jeg stadig er i gang med at lære.
        </p>
      </section>

      {/* grid med projekter */}
      <section className="blandede-projekter">
        <div className="section-heading">
          <span className="projekt-label">Udvalgte projekter</span>

          <h2>Eksperimenter & idéer</h2>
        </div>

        <div className="blandede-projekter-grid">
          {projects.map((project, index) => (
            <article
              className="blandet-projekt"
              key={`${project.title}-${index}`}
            >
              <div className="blandet-projekt-visual">
                {project.animation ? (
                  <Lottie animationData={LoadingIndicator} loop={true} />
                ) : (
                  <img src={project.image} alt={project.alt} />
                )}
              </div>

              <div className="blandet-projekt-info">
                <h3>{project.title}</h3>
                <p>{project.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* reflektion */}
      <section className="projekt-refleksion blandede-refleksion">
        <div className="projekt-refleksion-tekst">
          <span className="projekt-label">Min tilgang</span>

          <h2>Jeg kan godt lide at eksperimentere.</h2>

          <p>
            Jeg kan godt lide at arbejde med forskellige stilarter. Især det
            animerede look er en stil, jeg ofte vender tilbage til, fordi
            farver, former og bevægelse giver mulighed for at skabe noget
            levende og fantasifuldt.
          </p>

          <p>
            Mit seneste projekt, PubHub, tog dog udgangspunkt i neon og
            festæstetik. Det var fedt at arbejde så intenst med farver og spræl
            og bare nørkle med det visuelle udtryk.
          </p>

          <p>
            Samtidig nyder jeg også et simpelt og roligt design, hvor man ikke
            bliver forstyrret af for mange inputs. Den balance mellem det
            levende og det minimalistiske er noget, jeg synes er spændende at
            udforske.
          </p>
        </div>
      </section>

      {/* cta  */}
      <section className="projekt-cta">
        <span className="projekt-label">Har du en idé?</span>

        <h2>Lad os snakke.</h2>

        <Link id="knap" to="/kontakt-mig">
          Kontakt mig
        </Link>
      </section>
    </main>
  );
}
