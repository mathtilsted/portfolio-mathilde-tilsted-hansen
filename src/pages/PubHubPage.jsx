import "../css/pubhub.css";
import ProjectLayout from "../components/ProjectLayout";
import Pub1 from "../assets/projekt-sider/pubhub/pub1.svg";
import Pub2 from "../assets/projekt-sider/pubhub/pub2.svg";
import Pub3 from "../assets/projekt-sider/pubhub/pub3.svg";
import Pub4 from "../assets/projekt-sider/pubhub/pub4.svg";

export default function PubHubPage() {
  return (
    <ProjectLayout
      title="PubHub 2026"
      label="2. semester · Eksamen"
      intro="En webapp til Aarhus' natteliv, hvor brugeren hurtigt kan finde events, barer og oplevelser i nærheden."
      role="UX/UI · Design · Udvikling"
      collaboration="2 personer"
      focus="Mobile-first · UX · Webapp"
      hero={
        <img
          className="pubhub-phone pubhub-phone--hero"
          src={Pub1}
          alt="PubHub vist på mobil"
        />
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
          LIVE PROJEKT
      ====================================================== */}

      <div className="project-live project-container">
        <a
          href="https://eaa25mtha.github.io/webapp-eksamen/"
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          Se PubHub live ↗
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
            Opgaven var at udvikle et originalt app koncept, der skabte reel
            værdi for en målgruppe. Vores fokus blev unge som os selv i Aarhus'
            natteliv og det velkendte spørgsmål: Hvor skal vi hen nu?
          </p>

          <p>
            Vi så et behov for én samlet løsning, fordi man tit skal jonglere
            rundt mellem apps for at planlægge en bytur. Det skulle være en app,
            hvor man hurtigt kunne opdage events, finde barer i nærheden og få
            en fornemmelse af stemningen på et sted, før man besluttede sig for,
            om det var det værd.
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
            oplevelser rundt i byen. Vi havde også bare lyst til at bygge en
            app, vi faktisk selv ville bruge, hvis den eksisterede.
          </p>
        </article>
      </section>

      {/* =====================================================
          PRODUKT
      ====================================================== */}

      <section className="pubhub-product">
        <div className="project-container pubhub-product-grid">
          <div className="pubhub-product-phones">
            <img
              className="pubhub-phone"
              src={Pub2}
              alt="PubHub eventoversigt"
            />
            <img className="pubhub-phone" src={Pub3} alt="PubHub baroversigt" />
            <img className="pubhub-phone" src={Pub4} alt="PubHub kortvisning" />
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
