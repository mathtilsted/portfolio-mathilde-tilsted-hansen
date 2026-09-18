import ProjectLayout from "../components/ProjectLayout";
import "../css/vuuh.css";

export default function VuuhPage() {
  return (
    <ProjectLayout
      title="Vuuh 2026"
      label="Produktoptimering · Virksomhedscase"
      intro="Optimering af Vuuhs onboarding med fokus på at gøre en kompleks proces enklere, tydeligere og lettere at gennemføre."
      role="UX/UI · Motion design · Udvikling"
      collaboration="2 personer"
      focus="Onboarding · UX · Produktoptimering"
      hero={
        <div className="vuuh-placeholder vuuh-placeholder--hero">
          <span>Screenshot af Vuuh onboarding</span>
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
            Vuuh er en fashion tech-virksomhed, der skaber forbindelsen mellem
            webshops og brands. Deres løsning samler produktdata fra forskellige
            brands, så webshop-ejeren ikke selv skal håndtere og indtaste den
            manuelt.
          </p>

          <p>
            Casen tog udgangspunkt i onboarding til et nyt produkt, som Vuuh
            ønskede at teste og kvalificere. Den eksisterende onboarding
            indeholdt den nødvendige information, men oplevelsen var rodet og
            gjorde det svært for brugeren hurtigt at forstå processen og komme i
            gang.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Løsningen</h2>

          <p>
            I stedet for at redesigne produktet fra bunden arbejdede vi med at
            optimere den eksisterende løsning gennem mindre, målrettede
            ændringer.
          </p>

          <p>
            Vi arbejdede blandt andet med informationshierarki, semantik,
            simplificering og motion design for at skabe en onboarding, hvor
            brugeren lettere kunne forstå, hvad der skulle ske, og hvad næste
            handling var.
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
              Arbejdet blev struktureret omkring tre trin, som gjorde det muligt
              først at forstå problemerne, derefter forbedre løsningen og til
              sidst vurdere, om ændringerne faktisk gjorde onboarding lettere at
              bruge.
            </p>
          </div>

          <div className="vuuh-process-grid">
            <article className="vuuh-process-step">
              <span className="vuuh-process-number">01</span>
              <h3>Diagnosticere</h3>

              <p>
                Før vi ændrede noget, undersøgte vi den eksisterende onboarding
                og identificerede de steder, hvor struktur, information og
                interaktion skabte unødig friktion for brugeren.
              </p>
            </article>

            <article className="vuuh-process-step">
              <span className="vuuh-process-number">02</span>
              <h3>Redesigne</h3>

              <p>
                På baggrund af diagnosen arbejdede vi med målrettede ændringer i
                blandt andet hierarki, semantik, motion og opbygningen af de
                enkelte trin.
              </p>
            </article>

            <article className="vuuh-process-step">
              <span className="vuuh-process-number">03</span>
              <h3>Kvalificere</h3>

              <p>
                Til sidst kvalificerede vi den optimerede løsning for at
                undersøge, om ændringerne havde gjort onboarding mere tydelig og
                lettere for brugeren at gennemføre.
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
          <div className="vuuh-placeholder">
            <span>Screenshot af optimeret onboarding</span>
          </div>

          <div className="vuuh-optimisation-text">
            <p className="project-label">Optimeringen</p>

            <h2>
              Små ændringer.
              <br />
              Tydeligere oplevelse.
            </h2>

            <p>
              Projektet handlede ikke om at give Vuuh et helt nyt visuelt
              udtryk. I stedet arbejdede vi inden for det eksisterende produkt
              og fokuserede på de steder, hvor relativt små ændringer kunne
              forbedre brugerens oplevelse.
            </p>

            <p>
              Tydeligere hierarki og semantik gjorde informationen lettere at
              afkode, mens simplificering fjernede unødvendig kompleksitet.
              Motion design blev brugt funktionelt til at skabe feedback og
              hjælpe brugeren med at forstå progressionen gennem onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
      ====================================================== */}

      <section className="vuuh-reflection">
        <div className="project-container vuuh-reflection-grid">
          <div className="vuuh-reflection-text">
            <p className="project-label">Refleksion</p>
            <h2>Det tager jeg med videre</h2>

            <p>
              Vuuh-casen lærte mig især værdien af at forstå et eksisterende
              produkt, før man begynder at ændre på det. Et redesign behøver
              ikke være en total visuel forandring for at gøre en mærkbar
              forskel for brugeren.
            </p>

            <p>
              Projektet gav mig mere erfaring med at bruge UX, UI og motion
              design som værktøjer til at løse konkrete problemer og med at
              arbejde ud fra et eksisterende produkt og en virkelig virksomheds
              behov.
            </p>
          </div>

          <div className="vuuh-learning">
            <h3>Kompetencer fra projektet</h3>

            <ul>
              <li>
                <span>→</span>
                Produkt- og UX-analyse
              </li>

              <li>
                <span>→</span>
                Informationshierarki og semantik
              </li>

              <li>
                <span>→</span>
                Motion design som funktionelt værktøj
              </li>

              <li>
                <span>→</span>
                Optimering af eksisterende interfaces
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
