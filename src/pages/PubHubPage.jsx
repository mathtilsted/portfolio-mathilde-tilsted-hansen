import ProjectLayout from "../components/ProjectLayout";
import "../css/project-layout.css";

export default function PubHubPage() {
  return (
    <ProjectLayout
      title="PubHub 2026"
      label="2. semester · Eksamen"
      intro="En mobile-first webapp til Aarhus' natteliv, hvor brugeren hurtigt kan finde events, barer og oplevelser i nærheden."
      role="UX/UI · Design · Udvikling"
      collaboration="2 personer"
      focus="Mobile-first · UX · Webapp"
      hero={
        <div className="phone-placeholder phone-placeholder--hero">
          <span>Billede af app</span>
        </div>
      }
      previousProject={{
        title: "Blandet",
        path: "/projekter/blandet",
      }}
      nextProject={{
        title: "Mellemrum",
        path: "/projekter/mellemrum",
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
            Vi skulle udvikle et originalt digitalt koncept, der skabte reel
            værdi for en målgruppe. Vores fokus blev unge i Aarhus' natteliv og
            det velkendte spørgsmål:
            <strong> Hvor skal vi hen nu?</strong>
          </p>
          <p>
            Vi så et behov for én samlet løsning, hvor man hurtigt kunne opdage
            events, finde barer i nærheden og få en fornemmelse af stemningen på
            et sted, før man besluttede sig.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Løsningen</h2>
          <p>
            PubHub blev en mobil webapp med events, barer, kort og sociale
            funktioner samlet ét sted.
          </p>
          <p>
            Grundideen var at gøre det lettere og sjovere at planlægge en
            spontan aften og blandt andet skabe mulighed for pubcrawls og fælles
            oplevelser rundt i byen.
          </p>
        </article>
      </section>

      {/* =====================================================
          PRODUKT
      ====================================================== */}

      <section className="pubhub-product">
        <div className="project-container pubhub-product-grid">
          <div className="pubhub-product-phones">
            <div className="pubhub-product-blob" />
            <div className="phone-placeholder">
              <span>Events</span>
            </div>
            <div className="phone-placeholder">
              <span>Barer</span>
            </div>
            <div className="phone-placeholder">
              <span>Kort</span>
            </div>
          </div>

          <div className="pubhub-product-text">
            <p className="project-label">Produktet</p>
            <h2>
              Nattelivet
              <br />
              samlet ét sted
            </h2>
            <p>
              Events, barer og et kort over byen gør det muligt hurtigt at finde
              ud af, hvad der sker omkring brugeren.
            </p>
            <p>
              Designet blev udviklet med fokus på at være hurtigt og intuitivt
              at bruge midt i nattelivet, hvor brugeren ofte er distraheret og
              har brug for tydelige valg.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTAT + VIDEO
      ====================================================== */}

      <section className="pubhub-result">
        <div className="project-container pubhub-result-grid">
          <div className="pubhub-result-text">
            <p className="project-label">Resultatet</p>

            <h2>
              Fra koncept til
              <br />
              fungerende webapp
            </h2>

            <p>
              PubHub er udviklet som en mobile-first webapp med et visuelt
              univers, der passer til den situation, løsningen er designet til –
              det sociale og uforudsigelige natteliv.
            </p>

            <div className="pubhub-result-actions">
              <a
                href="https://eaa25mtha.github.io/webapp-eksamen/"
                target="_blank"
                rel="noreferrer"
                className="project-button project-button--primary"
              >
                Besøg PubHub ↗
              </a>

              <a href="#pubhub-video" className="project-button">
                Se video
              </a>
            </div>
          </div>

          <div className="video-placeholder" id="pubhub-video">
            <div className="video-placeholder-play">▶</div>

            <span>Video af PubHub</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
      ====================================================== */}

      <section className="pubhub-reflection">
        <div className="project-container pubhub-reflection-grid">
          <div className="pubhub-reflection-text">
            <p className="project-label">Refleksion</p>
            <h2>Det tager jeg med videre</h2>
            <p>
              PubHub lærte mig, hvor meget brugerens konkrete situation bør
              påvirke et interface. Et design kan godt være visuelt stærkt uden
              at blive svært at bruge, hvis hierarki og handlinger er tydelige.
            </p>
            <p>
              Projektet gav mig samtidig erfaring med at arbejde tæt mellem
              UX/UI, animation og udvikling frem for at se områderne som helt
              separate discipliner.
            </p>
          </div>

          <div className="pubhub-next-steps">
            <h3>Hvis vi arbejdede videre</h3>
            <ul>
              <li>
                <span>→</span>
                Vouchers og tilbud til brugeren
              </li>
              <li>
                <span>→</span>
                Direkte samarbejde med barer og caféer
              </li>
              <li>
                <span>→</span>
                Mulighed for at planlægge pubcrawls
              </li>
              <li>
                <span>→</span>
                Videreudvikling af sociale funktioner
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
