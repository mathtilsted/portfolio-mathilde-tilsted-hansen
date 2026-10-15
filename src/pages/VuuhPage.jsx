import ProjectLayout from "../components/ProjectLayout";
import Vuuh2 from "../assets/projekt-sider/vuuh/vuuh2.jpg";
import VuuhVideo from "../assets/projekt-sider/vuuh/vuuh-video.mp4";

import "../css/vuuh.css";

export default function VuuhPage() {
  return (
    <ProjectLayout
      title="Vuuh"
      label="3. semester · Produktoptimering"
      intro="En case der handlede om at optimere en eksisterende onboarding for virksomheden Vuuh. Målet var at gøre onboardingen intuitiv og tydelig for brugeren, så de nemt selvstændigt kan oprette forbindelse mellem egen webshop og Vuuhs produkt, som styrer alle ordre og andet data for dem."
      role="UX/UI · Onboarding · Audit"
      collaboration="Gruppeprojekt"
      focus="Onboarding · UX · Produktoptimering"
      hero={
        <div className="vuuh-hero">
          <video
            className="vuuh-hero-video"
            src={VuuhVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Skærmoptagelse af Vuuh-onboardingprototypen"
          >
            Din browser understøtter ikke videoafspilning.
          </video>
        </div>
      }
      previousProject={{
        title: "Mellemrum",
        path: "/projekter/mellemrum",
      }}
      nextProject={{
        title: "Go Rogue",
        path: "/projekter/rogue",
      }}
    >
      {/* =====================================================
          LINKS TIL PROTOTYPE OG UX AUDIT
          ===================================================== */}

      <div className="project-live project-container vuuh-links">
        <a
          className="project-button"
          href="https://www.figma.com/proto/1B3oRCTfMeswoYOLLaLaVa/Case-2---Vuuh?node-id=2461-10639&viewport=242%2C208%2C0.07&t=BBIUUudY3HNV6cnB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2461%3A10639&page-id=2195%3A3844"
          target="_blank"
          rel="noopener noreferrer"
        >
          Se prototype ↗
        </a>

        <a
          className="project-button"
          href={`${import.meta.env.BASE_URL}vuuh-ux-audit.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Se UX Audit ↗
        </a>
      </div>

      {/* =====================================================
          UDFORDRING + LØSNING
          ===================================================== */}

      <section className="project-story project-container">
        <article className="project-story-item">
          <span className="project-number">01</span>
          <h2>Udfordringen</h2>

          <p>
            Vuuh er en fashion tech-virksomhed, der skaber forbindelse mellem
            webshopejere og brands. Deres løsning gør det muligt automatisk at
            samle produktdata fra forskellige brands, så webshopejeren ikke selv
            behøver at indtaste dem manuelt. Problemet er, at deres onboarding
            til det her produkt er så kompliceret, at brugerne har store
            problemer med at oprette forbindelsen og derfor ikke oplever hurtigt
            nok, hvorfor løsningen er så smart.
          </p>

          <p>
            Vores opgave var at tydeliggøre de forskellige steps i Vuuhs
            onboarding og give brugeren adgang til magien lynhurtigt.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Løsningen</h2>

          <p>
            I stedet for at redesigne hele produktet arbejdede vi med mindre,
            målrettede forbedringer af den eksisterende onboarding.
          </p>

          <p>
            Vi arbejdede blandt andet med motion design, visuelt hierarki,
            semantik og simplificering af indholdet. Målet var at skabe en
            proces, hvor brugeren lettere kunne forstå næste skridt og komme i
            gang med produktet selvstændigt. Vi ville vise, at man sagtens kan
            optimere et produkt uden at redesigne hele løsningen.
          </p>
        </article>
      </section>

      {/* =====================================================
          PROCES
          ===================================================== */}

      <section className="vuuh-process">
        <div className="project-container">
          <div className="vuuh-process-heading">
            <p className="project-label">Processen</p>
            <h2>Fra diagnose til kvalificeret løsning</h2>

            <p>
              Arbejdet i denne case blev delt op i tre store trin, så vi først
              kunne forstå og identificere problemerne i den eksisterende
              løsning, derefter arbejde med forbedringer og til sidst vurdere,
              om ændringerne faktisk fungerede.
            </p>
          </div>

          <div className="project-three-column">
            <article className="project-three-column-item">
              <span>01</span>
              <h3>Diagnose</h3>

              <p>
                Først undersøgte vi den eksisterende onboarding for at finde de
                steder, hvor brugeren kunne blive forvirret eller møde
                unødvendig kompleksitet.
              </p>
            </article>

            <article className="project-three-column-item">
              <span>02</span>
              <h3>Redesign</h3>

              <p>
                På baggrund af vores observationer arbejdede vi med redesign af
                udvalgte steps i onboardingen, vi arbejdede også frem mod at
                skære ned på steps og skift mellem sider, så løsningen ikke
                føltes lige så tung og uoverskuelig.
              </p>
            </article>

            <article className="project-three-column-item">
              <span>03</span>
              <h3>Kvalificering</h3>

              <p>
                Til sidst kvalificerede vi vores redesign gennem heuristiske
                evalueringer og et videre skridt ville være brugertest på
                rigtige brugere.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          OPTIMERING
          ===================================================== */}

      <section className="vuuh-optimisation">
        <div className="project-container vuuh-optimisation-grid">
          <div className="vuuh-optimisation-media">
            <img
              src={Vuuh2}
              alt="Den optimerede onboarding i Vuuh"
              className="vuuh-optimisation-image"
            />
          </div>

          <div className="vuuh-optimisation-text">
            <p className="project-label">Optimeringen</p>
            <h2>Små ændringer med et tydeligt formål</h2>

            <p>
              Fokus var ikke at ændre Vuuhs visuelle identitet eller skabe et
              helt nyt interface. I stedet arbejdede vi videre med det produkt,
              der allerede eksisterede.
            </p>

            <p>
              Information blev prioriteret tydeligere, elementer blev
              simplificeret, og motiondesign blev brugt til at understøtte
              brugerens forståelse af processen frem for blot at fungere som
              dekoration.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
          ===================================================== */}

      <section className="vuuh-reflection project-section">
        <div className="project-container project-section-grid">
          <div className="project-section-text">
            <p className="project-label">Refleksion</p>
            <h2>Optimering er mange ting</h2>

            <p>
              Vuuh-projektet gjorde det tydeligt for mig, at produktoptimering
              ofte handler om at forstå, hvad der allerede fungerer, og hvordan
              brugeren oplever en løsning, før man begynder at ændre noget.
            </p>

            <p>
              Det gav også erfaring med at arbejde inden for rammerne af et
              eksisterende produkt og en rigtig virksomheds løsning, hvor små
              tekniske og visuelle justeringer kan have stor betydning for
              brugeroplevelsen.
            </p>
          </div>

          <div className="project-side-list">
            <h3>Det tager jeg med videre</h3>

            <ul>
              <li>
                <span>→</span>
                Diagnosticér før du designer
              </li>

              <li>
                <span>→</span>
                Simplificér før du tilføjer
              </li>

              <li>
                <span>→</span>
                Brug motion med et funktionelt formål
              </li>

              <li>
                <span>→</span>
                Test om ændringer faktisk forbedrer oplevelsen
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
