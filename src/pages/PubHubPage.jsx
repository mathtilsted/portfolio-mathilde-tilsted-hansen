import ProjectLayout from "../components/ProjectLayout";
import Pub1 from "../assets/projekt-sider/pubhub/pub1.svg";
import Pub2 from "../assets/projekt-sider/pubhub/pub2.svg";
import Pub3 from "../assets/projekt-sider/pubhub/pub3.svg";
import Pub4 from "../assets/projekt-sider/pubhub/pub4.svg";
import "../css/pubhub.css";

export default function PubHubPage() {
  return (
    <ProjectLayout
      title="PubHub 2026"
      label="2. semester · Eksamen"
      intro="Et originalt webapp koncept, hvor ønsket var at samle nattelivet i Aarhus ét sted og samtidig lave en underholdende og farverig løsning. "
      role="Design · Udvikling"
      collaboration="2 personer"
      focus="React · UX · Webapp"
      hero={
        <img
          src={Pub1}
          alt="PubHub app"
          className="pubhub-phone pubhub-phone--hero"
        />
      }
      previousProject={{
        title: "Sync",
        path: "/projekter/sync",
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
            Opgaven var at udvikle et originalt app koncept, der skabte reel
            værdi for en målgruppe vi selv bestemte. Vores fokus blev unge som
            os selv i Aarhus' natteliv og det velkendte spørgsmål: Hvor skal vi
            hen nu?
          </p>

          <p>
            Vi så et behov for én samlet løsning, fordi man tit skal jonglere
            rundt mellem apps for at planlægge en bytur. Det skulle være en app
            hvor man hurtigt kunne opdage events, finde barer i nærheden og få
            en fornemmelse af stemningen på et sted, før man besluttede sig for
            om det var det værd, samtidig med at designet skulle være sjovt, let
            og bidrage til stemningen.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Løsningen</h2>

          <p>
            PubHub blev en mobil webapp med events, barer, kort og sociale
            funktioner samlet ét sted. Det er både en meget praktisk, men også
            useriøs app, blandt andet gennem det karikerede navn vi endte med at
            give den. Vi sigtede efter et sjovt og måske også lidt provokerende
            udtryk.
          </p>

          <p>
            De intense farver og store knapper bidrog til en intuitiv og
            underholdende løsning, som vi begge var meget stolte af.
          </p>
        </article>
      </section>

      {/* =====================================================
          PRODUKT
      ====================================================== */}

      <section className="pubhub-product">
        <div className="project-container pubhub-product-grid">
          <div className="pubhub-product-phones">
            <img src={Pub2} alt="PubHub events" className="pubhub-phone" />

            <img src={Pub3} alt="PubHub barer" className="pubhub-phone" />

            <img src={Pub4} alt="PubHub kort" className="pubhub-phone" />
          </div>

          <div className="pubhub-product-text">
            <p className="project-label">Produktet</p>

            <h2>
              Nattelivet
              <br />i én app
            </h2>

            <p>
              Events, barer og et kort over byen gør det muligt hurtigt at finde
              ud af, hvad der sker omkring brugeren.
            </p>

            <p>
              Et særligt designvalg vi tog var det vi kaldte at gøre appen for
              "drunk-safe" Vi ville sørge for at selv midt om natten på en
              bytur, var brugeren stadig i stand til at ramme knapperne og komme
              videre med deres aften.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
      ====================================================== */}

      <section className="project-section">
        <div className="project-container project-section-grid">
          <div className="project-section-text">
            <p className="project-label">Refleksion</p>
            <h2>Det tager jeg med videre</h2>

            <p>
              PubHub lærte mig, hvor meget brugerens konkrete situation kan
              påvirke det interface vi udvikler. Et design kan godt være visuelt
              stærkt uden at blive svært at bruge, hvis hierarki og handlinger
              er tydelige for den der skal bruge det.
            </p>

            <p>
              Projektet lærte mig især hvordan et godt designsystem bygges op og
              koblingen til en backend som fx Supabase. Jeg havde en fornemmelse
              af at kunne virkelig meget selv efter det her projekt, jeg ser det
              som et springbræt til at kunne designe mere selvstændigt fordi jeg
              kom igennem så meget forskelligt i dette projekt.
            </p>
          </div>

          <div className="project-side-list">
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
