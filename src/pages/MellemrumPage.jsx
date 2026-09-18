import ProjectLayout from "../components/ProjectLayout";
import Mellem1 from "../assets/projekt-sider/mellemrum/mellem1.png";
import Mellem2 from "../assets/projekt-sider/mellemrum/mellem2.png";
import Mellem3 from "../assets/projekt-sider/mellemrum/mellem3.png";
import "../css/mellemrum.css";

export default function MellemrumPage() {
  return (
    <ProjectLayout
      title="Mellemrum 2026"
      label="Teknisk optimering"
      intro="Optimering og videreudvikling af en eksisterende digital løsning med fokus på kodearkitektur, database og brugerhåndtering."
      role="Udvikling · Struktur · Database"
      collaboration="Gruppeprojekt"
      focus="React · Supabase · Authentication"
      hero={
        <div className="desktop-placeholder desktop-placeholder--hero">
          <div className="desktop-placeholder-bar">
            <div className="mac-controls" aria-hidden="true">
              <span className="mac-control mac-control--close" />
              <span className="mac-control mac-control--minimize" />
              <span className="mac-control mac-control--maximize" />
            </div>

            <div className="mac-address">
              <span>Mellemrum</span>
            </div>
          </div>

          <div className="desktop-placeholder-content">
            <img
              src={Mellem1}
              alt="Mellemrum vist på desktop"
              className="mellemrum-image"
            />
          </div>
        </div>
      }
      previousProject={{
        title: "PubHub",
        path: "/projekter/pubhub",
      }}
      nextProject={{
        title: "Vuuh",
        path: "/projekter/vuuh",
      }}
    >
      {/* =====================================================
          LIVE PROJEKT
      ====================================================== */}

      <div className="project-live project-container">
        <a
          href="#"
          className="project-button"
          onClick={(event) => event.preventDefault()}
        >
          Se Mellemrum live ↗
        </a>
      </div>

      {/* =====================================================
          UDFORDRING + LØSNING
      ====================================================== */}

      <section className="project-story project-container">
        <article className="project-story-item">
          <span className="project-number">01</span>
          <h2>Udfordringen</h2>

          <p>
            Opgaven tog udgangspunkt i en allerede eksisterende løsning. Derfor
            handlede projektet ikke om at starte forfra, men om at undersøge den
            eksisterende kode og finde de steder, hvor løsningen kunne
            struktureres og optimeres.
          </p>

          <p>
            Fokus lå primært på det tekniske frem for et redesign af interfacet.
            Målet var at skabe en mere overskuelig kodebase og koble løsningen
            sammen med en database, så den kunne håndtere rigtige brugere og
            data.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Løsningen</h2>

          <p>
            Vi omstrukturerede dele af projektet og arbejdede med at adskille
            ansvar i koden, så funktionaliteten blev lettere at vedligeholde og
            arbejde videre med.
          </p>

          <p>
            Supabase blev koblet på som backend, og løsningen fik blandt andet
            authentication med forskellige brugerroller. Det betød, at indhold
            og funktionalitet kunne ændre sig alt efter, om brugeren var
            almindelig bruger, arrangør eller slet ikke var logget ind.
          </p>
        </article>
      </section>

      {/* =====================================================
          TEKNISK FOKUS
      ====================================================== */}

      <section className="mellemrum-technical">
        <div className="project-container mellemrum-technical-grid">
          <div className="mellemrum-technical-media">
            <div className="desktop-placeholder">
              <div className="desktop-placeholder-bar">
                <div className="mac-controls" aria-hidden="true">
                  <span className="mac-control mac-control--close" />
                  <span className="mac-control mac-control--minimize" />
                  <span className="mac-control mac-control--maximize" />
                </div>

                <div className="mac-address">
                  <span>Mellemrum</span>
                </div>
              </div>

              <div className="desktop-placeholder-content">
                <img
                  src={Mellem2}
                  alt="Teknisk løsning i Mellemrum"
                  className="mellemrum-image"
                />
              </div>
            </div>
          </div>

          <div className="mellemrum-technical-text">
            <p className="project-label">Teknisk fokus</p>

            <h2>
              En bedre struktur
              <br />
              bag interfacet
            </h2>

            <p>
              En stor del af arbejdet foregik i den kode, brugeren aldrig ser.
              Jeg arbejdede blandt andet med at samle databasekald og
              fetch-funktionalitet i en service-fil frem for at have logikken
              spredt rundt i forskellige komponenter.
            </p>

            <p>
              Det gav en tydeligere struktur og gjorde det nemmere at forstå,
              hvor data kom fra, og hvor ændringer skulle foretages.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          AUTHENTICATION
      ====================================================== */}

      <section className="mellemrum-auth project-container">
        <div className="mellemrum-auth-heading">
          <p className="project-label">Authentication</p>

          <h2>Én løsning, forskellige brugere</h2>

          <p>
            Med Supabase Authentication kunne vi styre, hvad forskellige brugere
            havde adgang til. I stedet for at alle mødte den samme løsning,
            kunne funktionaliteten tilpasses brugerens rolle.
          </p>
        </div>

        <div className="mellemrum-roles">
          <article className="mellemrum-role">
            <span>01</span>
            <h3>Ikke logget ind</h3>
            <p>
              Brugeren kan møde den offentligt tilgængelige del af løsningen
              uden adgang til funktioner, der kræver en konto.
            </p>
          </article>

          <article className="mellemrum-role">
            <span>02</span>
            <h3>Bruger</h3>
            <p>
              En almindelig bruger kan logge ind og få adgang til de funktioner,
              der hører til brugerens egen profil og oplevelse.
            </p>
          </article>

          <article className="mellemrum-role">
            <span>03</span>
            <h3>Arrangør</h3>
            <p>
              Arrangørrollen giver adgang til andre funktioner end den
              almindelige bruger og gør løsningen afhængig af brugerens rolle.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          RESULTAT
      ====================================================== */}

      <section className="mellemrum-result">
        <div className="project-container mellemrum-result-grid">
          <div className="mellemrum-result-text">
            <p className="project-label">Resultatet</p>

            <h2>Mindre synligt. Mere vigtigt.</h2>

            <p>
              Mellemrum er en anden type case end projekter, hvor det visuelle
              design er i centrum. Den største forskel ligger bag det, man ser
              på skærmen.
            </p>

            <p>
              Projektet gav mig erfaring med at overtage eksisterende kode,
              forstå dens struktur og forbedre den uden nødvendigvis at bygge
              hele løsningen på ny.
            </p>
          </div>

          <div className="desktop-placeholder">
            <div className="desktop-placeholder-bar">
              <div className="mac-controls" aria-hidden="true">
                <span className="mac-control mac-control--close" />
                <span className="mac-control mac-control--minimize" />
                <span className="mac-control mac-control--maximize" />
              </div>

              <div className="mac-address">
                <span>Mellemrum</span>
              </div>
            </div>

            <div className="desktop-placeholder-content">
              <img
                src={Mellem3}
                alt="Den færdige Mellemrum løsning"
                className="mellemrum-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
      ====================================================== */}

      <section className="mellemrum-reflection">
        <div className="project-container mellemrum-reflection-grid">
          <div className="mellemrum-reflection-text">
            <p className="project-label">Refleksion</p>
            <h2>Det tager jeg med videre</h2>

            <p>
              Projektet gjorde mig mere bevidst om, at en god digital løsning
              ikke kun handler om det, brugeren kan se. Struktur og organisering
              i koden har stor betydning for, hvor nem en løsning er at
              vedligeholde og videreudvikle.
            </p>

            <p>
              Jeg fik især mere erfaring med at arbejde med Supabase,
              authentication og rollebaseret funktionalitet samt med at tænke
              mere systematisk over, hvor forskellige dele af logikken bør
              ligge.
            </p>
          </div>

          <div className="mellemrum-learning">
            <h3>Kompetencer fra projektet</h3>

            <ul>
              <li>
                <span>→</span>
                Strukturering af eksisterende kode
              </li>

              <li>
                <span>→</span>
                Supabase og databaseintegration
              </li>

              <li>
                <span>→</span>
                Authentication og brugerroller
              </li>

              <li>
                <span>→</span>
                Service-filer og håndtering af data
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
