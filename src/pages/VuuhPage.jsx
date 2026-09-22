import ProjectLayout from "../components/ProjectLayout";
import Vuuh1 from "../assets/projekt-sider/vuuh/vuuh1.jpg";
import Vuuh2 from "../assets/projekt-sider/vuuh/vuuh2.jpg";
import "../css/vuuh.css";

export default function VuuhPage() {
  return (
    <ProjectLayout
      title="Vuuh"
      label="3. semester · Produktoptimering"
      intro="En optimering af Vuuhs onboarding med fokus på at gøre et eksisterende produkt mere overskueligt, intuitivt og lettere at komme i gang med."
      role="UX/UI · Motion design · Udvikling"
      collaboration="Gruppeprojekt"
      focus="Onboarding · UX · Produktoptimering"
      hero={
        <div className="vuuh-hero">
          <img src={Vuuh1} alt="Vuuh onboarding" className="vuuh-hero-image" />
        </div>
      }
      previousProject={{
        title: "Mellemrum",
        path: "/projekter/mellemrum",
      }}
      nextProject={{
        title: "Sync",
        path: "/projekter/sync",
      }}
    >
      {/* =====================================================
          UDFORDRING + LØSNING
      ====================================================== */}

      <section className="project-story project-container">
        <article className="project-story-item">
          <span className="project-number">01</span>

          <h2>Udfordringen</h2>

          <p>
            Vuuh er en fashion tech-virksomhed, der skaber forbindelse mellem
            webshopejere og brands. Deres løsning gør det muligt automatisk at
            samle produktdata fra forskellige brands, så webshopejeren ikke selv
            behøver at indtaste dem manuelt.
          </p>

          <p>
            Casen tog udgangspunkt i en eksisterende onboarding, som skulle
            testes og optimeres. Den oprindelige løsning indeholdt meget
            information på én gang og gjorde det svært for brugeren hurtigt at
            forstå processen og komme i gang.
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
            semantik og simplificering af indholdet. Målet var at skabe en mere
            tydelig proces, hvor brugeren lettere kunne forstå næste skridt og
            komme i gang med produktet.
          </p>
        </article>
      </section>

      {/* =====================================================
          PROCES
      ====================================================== */}

      <section className="vuuh-process">
        <div className="project-container">
          <div className="vuuh-process-heading">
            <p className="project-label">Processen</p>

            <h2>Fra diagnose til kvalificeret løsning</h2>

            <p>
              Arbejdet blev delt op i tre trin, så vi først kunne forstå
              problemerne i den eksisterende løsning, derefter arbejde med
              forbedringerne og til sidst vurdere, om ændringerne faktisk
              fungerede.
            </p>
          </div>

          <div className="project-three-column">
            <article className="project-three-column-item">
              <span>01</span>

              <h3>Diagnosticere</h3>

              <p>
                Først undersøgte vi den eksisterende onboarding for at finde de
                steder, hvor brugeren kunne blive forvirret eller møde
                unødvendig kompleksitet.
              </p>
            </article>

            <article className="project-three-column-item">
              <span>02</span>

              <h3>Redesigne</h3>

              <p>
                På baggrund af vores observationer arbejdede vi med hierarki,
                motion design, semantik og simplificering frem for et komplet
                redesign af produktet.
              </p>
            </article>

            <article className="project-three-column-item">
              <span>03</span>

              <h3>Kvalificere</h3>

              <p>
                Til sidst blev løsningen vurderet igen for at undersøge, om
                ændringerne gjorde onboarding-processen mere tydelig og lettere
                at gennemføre.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          OPTIMERING
      ====================================================== */}

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
              simplificeret, og motion blev brugt til at understøtte brugerens
              forståelse af processen frem for blot at fungere som dekoration.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
      ====================================================== */}

      <section className="vuuh-reflection project-section">
        <div className="project-container project-section-grid">
          <div className="project-section-text">
            <p className="project-label">Refleksion</p>

            <h2>Optimering behøver ikke være et redesign</h2>

            <p>
              Vuuh-projektet gjorde det tydeligt for mig, at produktoptimering
              ofte handler om at forstå, hvad der allerede fungerer, før man
              begynder at ændre noget.
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
