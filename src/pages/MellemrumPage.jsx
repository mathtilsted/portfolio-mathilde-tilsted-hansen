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
      label="3. semester · Produktoptimering"
      intro="Mellem var en teknisk optimerings case af en eksisterende løsning med fokus på struktur og database"
      role="Struktur · Database"
      collaboration="Individuelt projekt"
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
            Mellemrum var en allerede eksisterende løsning, vi fik udleveret
            hvor opgaven var at viderudvikle produktet så løsningen performede
            bedre både teknisk og i et accesibility flow.
          </p>

          <p>
            Koden skulle være vedligeholdelsesvenlig og nem at gå til for en
            udvikler der ikke havde set koden før.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Løsningen</h2>

          <p>
            Jeg arbejdede med at restrukturere projektet og flytte ansvar ud i
            mere tydelige dele af applikationen, så jeg undgik duplikeret kode
            der ville resultere i database problemer hvis en ændring skete ét
            sted på løsningen og ikke et andet.
          </p>

          <p>
            Supabase blev koblet på som database, og løsningen fik et egentligt
            authentication-system med forskellige brugerroller, der afgør hvor
            meget en bruger kan tilgå i løsningen. Her er tænkt særligt på hvor
            meget adgang en almen person har til andres oplysninger på et
            interface hvor man kan tilmelde sig events.
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
              overskuelige, samtidig med at jeg minimerede den duplikerede kode.
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
            Jeg byggede et authentication system med Supabase, så løsningen
            kunne reagere forskelligt alt efter, hvem der brugte den.
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
              Resultatet var ikke et stort visuelt redesign. De fleste af de
              visuelle elementer er bevaret, jeg har dog justeret ting som
              spacing og andre visuelt støjende elementer så lønsingen er endnu
              mere tilgængelig.
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
              Mellemrum har givet mig en bedre forståelse for, hvor meget
              strukturen bag et produkt betyder. En løsning kan se simpel ud for
              brugeren, selvom der foregår meget under overfladen, som kan være
              super kompliceret for den udvikler der sidder med det.
            </p>

            <p>
              Jeg har fået endnu mere erfaring med Supabase og især
              authentication samt service moduler i koden der kan have ansvaret
              for fetch kald og i det hele taget forholdet mellem client og
              server.
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
                Teknisk kvalitet er altafgørende
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
