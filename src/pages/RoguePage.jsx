import ProjectLayout from "../components/ProjectLayout";
import RogueLogo from "../assets/projekt-sider/rogue/rogue_logo.svg";
import Branddeck from "../assets/projekt-sider/rogue/branddeck.svg";
import Branddeck2 from "../assets/projekt-sider/rogue/branddeck2.svg";
import RogueVideo from "../assets/projekt-sider/rogue/rogue-screenrecord.mp4";

import "../css/rogue.css";

export default function RoguePage() {
  return (
    <ProjectLayout
      title="Go Rogue"
      label="3. semester· Produktoptimering"
      intro="Et subbrand og datteren til La Rouge. Casen arbejdede med recommerce og målgruppeforståelse, med fokus på at fremme og styrke La Rouges recommerce-initiativ."
      role="Brandstrategi · Konceptudvikling · Visuel identitet"
      collaboration="Gruppeprojekt"
      focus="Recommerce · Målgruppe · Branding"
      hero={
        <div className="rogue-hero">
          <img
            src={RogueLogo}
            alt="Go Rogue-logo"
            className="rogue-hero-logo"
          />
        </div>
      }
      previousProject={{
        title: "Vuuh",
        path: "/projekter/vuuh",
      }}
      nextProject={{
        title: "Sync",
        path: "/projekter/sync",
      }}
    >
      {/* =====================================================
          PROTOTYPELINK
          ===================================================== */}
      <div className="project-live project-container rogue-links">
        <a
          href="https://www.figma.com/proto/xJ147c7hA2Vpd1IKHds3Sg/La-Rouge---Go-Rogue?node-id=177-2576&viewport=117%2C113%2C0.27&t=f92LTAeiAP3rhhp6-1&scaling=contain&content-scaling=fixed&starting-point-node-id=139%3A1495&page-id=139%3A1494"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          Se desktop prototype ↗
        </a>

        <a
          href="https://www.figma.com/proto/xJ147c7hA2Vpd1IKHds3Sg/La-Rouge---Go-Rogue?node-id=518-9445&viewport=-272%2C331%2C0.2&t=QrvQEjhOXMzKmoNY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=518%3A9445&page-id=43%3A57"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          Se mobil prototype ↗
        </a>

        <button
          type="button"
          className="project-button branddeck-button"
          onClick={() => {
            document.getElementById("branddeck")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Se branddeck ↓
        </button>
      </div>

      {/* =====================================================
          UDFORDRINGEN OG LØSNINGEN
          ===================================================== */}

      <section className="project-story project-container">
        <article className="project-story-item">
          <span className="project-number">01</span>
          <h2>Udfordringen</h2>

          <p>
            La Rouge bad os om at styrke deres recommerce-initiativ. De oplever
            at kunderne elsker tøjet og at de gerne køber det brugt, men at de
            meget sjældent sender deres tøj tilbage til La Rouge gennem det
            eksisterende koncept de bruger lige nu, hvor man sender tøjet ind og
            får et gavekort med 30% af det oprindelige køb, som der kan shoppes
            for på hjemmesiden.
          </p>

          <p>
            Vores opgave blev at rebrande deres recommerce i et subbrand der
            kunne tale til brugeren på en anden måde og på den måde opfordre dem
            til at bruge konceptet og sende deres tøj tilbage til La Rouge i
            stedet for at sælge det på platforme som Vinted mm.
          </p>
        </article>

        <article className="project-story-item">
          <span className="project-number">02</span>
          <h2>Vores løsning</h2>

          <p>
            Vi udviklede Go Rogue som et subbrand, der bygger videre på La
            Rouges eksisterende univers, men taler med en yngre og mere frisk
            stemme, der opfordrer kvinder til at genbruge det tidløse og
            elegante La Rouge tøj og stå ved deres egen stil og person.
          </p>

          <p>
            Vi valgte en yngre målgruppe, primært kvinder i 30'erne, og
            arbejdede med en feministisk designretning. Målet var at skabe en
            identitet, som både kunne vække nysgerrighed og give
            recommerce-konceptet sin egen plads i fortællingen om La Rouge. Vi
            ville give La Rouge et seriøst TWIST. Rødstrømpe anno 2026.
          </p>
        </article>
      </section>

      {/* =======================================================
          HVAD LAVEDE JEG?
      ===========================================================*/}
      <section className="rogue-section project-container rogue-rolle">
        <div className="rogue-section-heading">
          <p className="project-label">Hvad lavede jeg?</p>
          <h2>Min rolle</h2>

          <p>
            Go Rogue var et gruppeprojekt med tre personer, hvor jeg især
            arbejdede med brandets tone of voice, farvevalg og branddeck. Jeg
            havde også særligt fokus på mobilprototypen i Figma, hvor jeg var
            med til at omsætte vores koncept og visuelle identitet til en
            digital oplevelse.
          </p>
        </div>
      </section>

      {/* =====================================================
          BRANDSTRATEGI MED PROTOTYPEVIDEO
          ===================================================== */}

      <section className="rogue-section brandstrategi">
        <div className="project-container rogue-split">
          <div className="rogue-copy">
            <p className="project-label">Brandstrategi</p>
            <h2>Et Branded House</h2>

            <p>
              Vi arbejdede med en branded house-tilgang. Go Rogue skulle ikke
              stå som et uafhængigt brand, men fungere som en forlængelse af La
              Rouge. Vi arbejdede meget med mor-datter-forholdet i denne
              sammenhæng, fordi vi så det som en naturlig forlængelse af La
              Rouge, så forbindelsen til moderbrandets kvalitet og identitet
              stadig var tydelig.
            </p>

            <p>
              Det gav os mulighed for at udforske et mere modigt og larmende
              udtryk uden at slippe den eksisterende brandfortælling og
              kærligheden til kvinder og deres ret til dem selv, som ligger bag
              brandet La Rouge.
            </p>
          </div>

          <video
            className="rogue-video"
            src={RogueVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Skærmoptagelse af Go Rogue-prototypen"
          >
            Din browser understøtter ikke videoafspilning.
          </video>
        </div>
      </section>

      {/* =====================================================
          KREATIV RETNING
          ===================================================== */}

      <section id="branddeck" className="rogue-section project-container">
        <div className="rogue-section-heading kreativ-retning">
          <p className="project-label">Kreativ retning</p>
          <h2>Unapolegetically Us</h2>

          <p>
            Den visuelle retning blev med afsæt i rødstrømpebevægelsen. Hvordan
            kunne vi tage det eksisterende fællesskab La Rouge havde bygget op
            med deres kerneværdier omkring selvkærlighed og give det et twist
            der kunne fange opmærksomheden fra en yngre målgruppe der i højere
            grad shopper recommerce?
          </p>

          <p>
            Vi tog udgangspunkt i det eksisterende udtryk fra La Rouge, men med
            mere kontrastfyldte farver og et udtryk med scener "bag Paris". Vi
            fjernede lidt af det polerede, uden at skille os af med det elegante
            og tidløse udtryk. Herunder ses to branddecks. Til højre er det vi
            endte med at gå med, fordi det skarpere og "vildere" udtryk talte
            bedst ind i brandpersonligheden, hvorimod det branddeck der ses til
            venstre var en af flere variationer der havde tungere afsæt i den
            oprindelige identitet, men ultimativt gik vi ikke med denne retning,
            fordi vi havde lyst til at markere forskellen på mor og datter om
            man vil.
          </p>
        </div>

        <div className="rogue-gallery">
          <img
            src={Branddeck2}
            alt="Variation af branddeck, som ikke blev valgt"
            className="rogue-image branddeck2"
          />

          <img
            src={Branddeck}
            alt="Branddeck for Go Rogues visuelle identitet"
            className="rogue-image"
          />
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
          ===================================================== */}

      <section className="rogue-section rogue-reflection project-container">
        <p className="project-label">Refleksion</p>

        <div>
          <h2>Branding med et udgangspunkt</h2>

          <p>
            Go Rogue gav os mulighed for at arbejde med, hvordan et eksisterende
            brand kan udvikle en ny retning uden at miste forbindelsen til sit
            udgangspunkt. Det krævede både forståelse for La Rouge, en afgrænset
            målgruppe og et koncept, der kunne give recommerce mere opmærksomhed
            og oplyse brugerne på ny om deres muligheder.
          </p>

          <p>
            For mig har casen været interessant fordi vi fik lov til at udvikle
            på og udfordre et eksisterende og veletableret brand. Det var fedt
            at lege med konceptet og bygge en brandidentitet der potentielt kan
            bruges af La Rouge i fremtiden. Det har også været fedt at bygge
            noget der kan skabe værdi for en tidligere og ny generation af La
            Rouge shoppere.
          </p>
        </div>
      </section>
    </ProjectLayout>
  );
}
