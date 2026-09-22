import ProjectLayout from "../components/ProjectLayout";
import Mellem1 from "../assets/projekt-sider/mellemrum/mellem1.png";
import Mellem2 from "../assets/projekt-sider/mellemrum/mellem2.png";
import Mellem3 from "../assets/projekt-sider/mellemrum/mellem3.png";
import "../css/mellemrum.css";

function DesktopFrame({ image, alt }) {
  return (
    <div className="desktop-placeholder">
      <div className="desktop-placeholder-bar">
        <div className="mac-controls">
          <span className="mac-control mac-control--close"></span>
          <span className="mac-control mac-control--minimize"></span>
          <span className="mac-control mac-control--maximize"></span>
        </div>

        <div className="mac-address">
          <span>mellemrum.dk</span>
        </div>
      </div>

      <div className="desktop-placeholder-content">
        <img className="mellemrum-image" src={image} alt={alt} />
      </div>
    </div>
  );
}

export default function MellemrumPage() {
  return (
    <ProjectLayout
      title="Mellemrum"
      label="2. semester · Produktoptimering"
      intro="En teknisk optimering af en eksisterende løsning med fokus på struktur, database og brugerroller."
      role="Frontend · Struktur · Database"
      collaboration="Gruppeprojekt"
      focus="React · Supabase · Authentication"
      hero={
        <div className="desktop-placeholder desktop-placeholder--hero">
          <div className="desktop-placeholder-bar">
            <div className="mac-controls">
              <span className="mac-control mac-control--close"></span>
              <span className="mac-control mac-control--minimize"></span>
              <span className="mac-control mac-control--maximize"></span>
            </div>

            <div className="mac-address">
              <span>mellemrum.dk</span>
            </div>
          </div>

          <div className="desktop-placeholder-content">
            <img
              className="mellemrum-image"
              src={Mellem1}
              alt="Forsiden af Mellemrum"
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
          UDFORDRING + LØSNING
      ====================================================== */}

      <section className="project-story project-container">
        <article className="project-story-item">
          <span className="project-number">01</span>
          <h2>Udfordringen</h2>

          <p>
            Mellemrum var allerede en eksisterende løsning, og opgaven handlede
            derfor ikke om at udvikle et helt nyt produkt fra bunden.
          </p>

          <p>
            I stedet var fokus at optimere den tekniske løsning og skabe en
            bedre struktur i projektet, så koden blev lettere at arbejde videre
            med og vedligeholde.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Løsningen</h2>

          <p>
            Vi arbejdede med at restrukturere projektet og flytte ansvar ud i
            mere tydelige dele af applikationen.
          </p>

          <p>
            Samtidig blev Supabase koblet på som database, og løsningen fik et
            egentligt authentication-system med forskellige brugerroller.
          </p>
        </article>
      </section>

      {/* =====================================================
          TEKNISK FOKUS
      ====================================================== */}

      <section className="mellemrum-technical">
        <div className="project-container mellemrum-technical-grid">
          <div className="mellemrum-technical-media">
            <DesktopFrame
              image={Mellem2}
              alt="Eksempel fra Mellemrum løsningen"
            />
          </div>

          <div className="mellemrum-technical-text">
            <div className="mellemrum-technical-heading">
              <p className="project-label">Teknisk fokus</p>
              <h2>En bedre struktur bag løsningen</h2>
            </div>
            <p>
              En stor del af arbejdet lå i selve kodebasen. Projektet blev
              struktureret mere konsekvent, så komponenter og funktionalitet fik
              tydeligere ansvar.
            </p>

            <p>
              Jeg arbejdede blandt andet med en service-fil, hvor fetch-kald og
              kommunikationen med databasen blev samlet. Det gjorde det lettere
              at genbruge funktionalitet og holde komponenterne mere
              overskuelige.
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
          <h2>Forskellige brugere, forskellige muligheder</h2>

          <p>
            Authentication blev bygget med Supabase, så løsningen kunne reagere
            forskelligt alt efter, hvem der brugte den.
          </p>
        </div>

        <div className="project-three-column">
          <article className="project-three-column-item">
            <span>01</span>
            <h3>Ikke logget ind</h3>
            <p>
              Brugeren kan se det offentlige indhold, men har ikke adgang til
              funktioner, der kræver en konto.
            </p>
          </article>

          <article className="project-three-column-item">
            <span>02</span>
            <h3>Bruger</h3>
            <p>
              En almindelig bruger får adgang til de funktioner, der hører til
              den personlige del af løsningen.
            </p>
          </article>

          <article className="project-three-column-item">
            <span>03</span>
            <h3>Arrangør</h3>
            <p>
              Arrangører får adgang til funktioner og indhold, som almindelige
              brugere ikke kan administrere.
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
            <h2>Teknisk optimering</h2>

            <p>
              Resultatet var ikke et stort visuelt redesign. Forbedringen lå i
              højere grad i den måde løsningen var bygget op på.
            </p>

            <p>
              En mere overskuelig struktur, databaseintegration og tydelig
              håndtering af brugerroller gjorde løsningen mere robust og lettere
              at videreudvikle.
            </p>
          </div>

          <DesktopFrame
            image={Mellem3}
            alt="Eksempel fra den færdige Mellemrum løsning"
          />
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
      ====================================================== */}

      <section className="mellemrum-reflection project-section">
        <div className="project-container project-section-grid">
          <div className="project-section-text">
            <p className="project-label">Refleksion</p>
            <h2>Teknik er også en del af brugeroplevelsen</h2>

            <p>
              Projektet gav mig en bedre forståelse for, hvor meget strukturen
              bag et produkt betyder. En løsning kan se simpel ud for brugeren,
              selvom der foregår meget under overfladen.
            </p>

            <p>
              Jeg fik især erfaring med at tænke mere systematisk omkring
              dataflow, genbrugelig kode og adskillelse af ansvar.
            </p>
          </div>

          <div className="project-side-list">
            <h3>Det tager jeg med videre</h3>

            <ul>
              <li>
                <span>→</span>
                Strukturér kode efter ansvar
              </li>

              <li>
                <span>→</span>
                Saml databasekald og fetch-logik
              </li>

              <li>
                <span>→</span>
                Tænk brugerroller ind tidligt
              </li>

              <li>
                <span>→</span>
                Teknisk kvalitet påvirker også brugeroplevelsen
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
