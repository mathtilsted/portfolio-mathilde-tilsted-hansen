import ProjectLayout from "../components/ProjectLayout";
import Mellem1 from "../assets/projekt-sider/mellemrum/mellem1.png";
import Mellem2 from "../assets/projekt-sider/mellemrum/mellem2.png";
import MellemrumVideo from "../assets/projekt-sider/mellemrum/mellemrum-video.mp4";

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
      intro="Mellemrum var en teknisk optimerings case af en eksisterende løsning med fokus på struktur og database. Casen byggede på en fiktiv platform, der havde problemer med fejlhåndtering og states."
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
          LINKS TIL LIVE SITE OG GITHUB
          ===================================================== */}

      <div className="project-live project-container mellemrum-links">
        <a
          className="project-button"
          href="https://eaa25mtha.github.io/mellemrum/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Se live projekt ↗
        </a>

        <a
          className="project-button"
          href="https://github.com/eaa25mtha/mellemrum"
          target="_blank"
          rel="noopener noreferrer"
        >
          Se GitHub-kode ↗
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
            Mellemrum var en allerede eksisterende løsning, vi fik udleveret
            hvor opgaven var at videreudvikle produktet så løsningen performede
            bedre både teknisk og i et accesibility-aspekt. Løsningen havde
            problemer med duplikeret kode, hvilket resulterede i
            databaseproblemer, når en ændring blev foretaget ét sted i koden og
            ikke et andet. En del af opgaven var derfor at restrukturere koden,
            så arkitekturen blev mere overskuelig.
          </p>

          <p>
            Koden skulle være vedligeholdelsesvenlig og nem at gå til for en
            udvikler, der ikke havde set koden før.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Løsningen</h2>

          <p>
            Jeg arbejdede med at restrukturere projektet og flytte ansvaret for
            forskellige dele af koden ud i flere moduler, så koden blev nemmere
            at forstå og vedligeholde. Dette fjernede også den duplikerede kode,
            som nævnt tidigere.
          </p>

          <p>
            Jeg brugte Supabase som database, og løsningen fik et egentligt
            authentication-system med forskellige brugerroller, der afgør, hvor
            meget information en bruger kan tilgå i løsningen. Her er tænkt
            særligt på hvor meget adgang en almen person har til andres
            oplysninger på et interface hvor man kan tilmelde sig events og at
            det kan være problematisk hvis vi har et site hvor alle har alles
            information uden flere trins verifikation.
          </p>
        </article>
      </section>

      {/* =====================================================
          TEKNISK FOKUS MED VIDEO
          ===================================================== */}

      <section className="mellemrum-technical">
        <div className="project-container mellemrum-technical-grid">
          <div className="mellemrum-technical-media">
            <video
              className="mellemrum-video"
              src={MellemrumVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Skærmoptagelse af Mellemrum-projektet"
            >
              Din browser understøtter ikke videoafspilning.
            </video>
          </div>

          <div className="mellemrum-technical-text">
            <div className="mellemrum-technical-heading">
              <p className="project-label">Teknisk fokus</p>
              <h2>En bedre struktur bag løsningen</h2>
            </div>

            <p>
              En stor del af arbejdet lå i selve koden. Jeg ryddede op i koden
              og strukturerede den mere konsekvent, så komponenter og
              funktionalitet fik tydeligere ansvar. Selvom jeg har
              restruktureret meget, har jeg ladet den main CSS fil stå. Det kan
              være en fordel ikke at overgøre det med opdeling af koden, når det
              ikke er nødvendigt. Derfor har jeg i stedet tilføjet kommentarer
              og opdelinger så main filen nemmere kan læses.
            </p>

            <p>
              Jeg arbejdede også med en service-filer, blandt andet til
              fetch-kald, så kommunikationen med databasen blev samlet. Det
              gjorde det lettere at genbruge funktionalitet og holde
              komponenterne mere overskuelige.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          AUTHENTICATION
          ===================================================== */}

      <section className="mellemrum-auth project-container">
        <div className="mellemrum-auth-heading">
          <p className="project-label">Authentication</p>
          <h2>Forskellige brugere, forskellige muligheder</h2>
          <p>
            Jeg byggede et authentication-system med Supabase, så løsningen kan
            reagere forskelligt alt efter, hvem der bruger den. Der findes to
            brugere, en almen og en arrangør, de to brugere kan testes ved at
            bruge følgende login og kode.
          </p>
          <p>
            <strong>Almen bruger:</strong> testbruger@supabase.com - kode:
            test1test <br />
            <strong>Arrangør:</strong> testorganizer@supabase.com - kode:
            test2test
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
              den personlige del af løsningen, fx at kunne tilmelde sig et
              event, men ikke se andres tilmeldinger.
            </p>
          </article>

          <article className="project-three-column-item">
            <span>03</span>
            <h3>Arrangør</h3>
            <p>
              Arrangører får adgang til funktioner og indhold, som almindelige
              brugere ikke kan administrere, fx at se eventtilmeldinger på alle.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          RESULTAT
          ===================================================== */}

      <section className="mellemrum-result">
        <div className="project-container mellemrum-result-grid">
          <div className="mellemrum-result-text">
            <p className="project-label">Resultatet og visuelt fokus</p>
            <h2>Visuelt?</h2>

            <p>
              Resultatet var ikke et stort visuelt redesign. De fleste af de
              visuelle elementer er bevaret, jeg har dog justeret ting som
              spacing og andre visuelt støjende elementer så løsningen er endnu
              mere tilgængelig. Det er ting en almindelig bruger ikke vil tænke
              over, medmindre de ikke er fikset, så larmer det.
            </p>
          </div>

          <DesktopFrame
            image={Mellem2}
            alt="Eksempel fra den færdige Mellemrum løsning"
          />
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
          ===================================================== */}

      <section className="mellemrum-reflection project-section">
        <div className="project-container project-section-grid">
          <div className="project-section-text">
            <p className="project-label">Refleksion</p>
            <h2>Teknisk fokus</h2>

            <p>
              Mellemrum har givet mig en bedre forståelse for, hvor meget
              strukturen bag et produkt betyder. En løsning kan se simpel ud for
              brugeren, selvom der foregår meget under overfladen, som kan være
              super kompliceret for den udvikler der sidder med det.
            </p>

            <p>
              Jeg har fået mere erfaring med Supabase og især authentication
              samt servicemoduler i koden der kan have ansvaret for fetch-kald.
              Det har været super interessant at have noget der ligner
              backendfokus i et projekt. Optimeringerne på Mellemrum kan skabe
              værdi ved at gøre platformen lettere at bruge og administrere, så
              den bedre understøtter både deltagere og arrangører.
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
                Fejlhåndtering og states
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
