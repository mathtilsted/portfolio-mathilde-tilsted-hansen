import ProjectLayout from "../components/ProjectLayout";
import Sync1 from "../assets/projekt-sider/sync/sync1.svg";
import Sync3 from "../assets/projekt-sider/sync/sync3.jpg";
import Sync4 from "../assets/projekt-sider/sync/sync4.jpg";
import Sync5 from "../assets/projekt-sider/sync/sync5.jpg";
import "../css/sync.css";

export default function SyncPage() {
  return (
    <ProjectLayout
      title="Sync"
      label="Logo design · Personligt projekt"
      intro="Et mindre designprojekt for et band, der havde brug for en ny visuel identitet med udgangspunkt i et nyt logo."
      role="Visuel identitet · Logo design"
      collaboration="Selvstændigt projekt"
      focus="Branding · Typografi · Design"
      hero={
        <div className="sync-hero">
          <img src={Sync1} alt="Sync logo" className="sync-hero-image" />
        </div>
      }
      previousProject={{
        title: "Vuuh",
        path: "/projekter/vuuh",
      }}
      nextProject={{
        title: "PubHub",
        path: "/projekter/pubhub",
      }}
    >
      {/* =====================================================
          OM PROJEKTET
      ====================================================== */}

      <section className="sync-intro-section">
        <div className="sync-intro project-container">
          <div className="sync-intro-heading">
            <span className="project-number">01</span>
            <h2>En lille opgave med en rigtig modtager</h2>
          </div>

          <div className="sync-intro-text">
            <p>
              Sync startede som et privat miniprojekt for en veninde, hvis band
              havde brug for et nyt logo. Det gav mig mulighed for at prøve
              kræfter med en mindre, freelance-lignende opgave uden for
              studieprojekterne.
            </p>

            <p>
              Opgaven var afgrænset: at skabe et logo, der kunne give bandet et
              tydeligere visuelt udtryk og fungere på tværs af de steder, hvor
              de havde brug for at bruge deres identitet.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BILLEDER
      ====================================================== */}

      <section className="sync-gallery project-container">
        <div className="sync-gallery-grid">
          <div className="sync-gallery-item">
            <img src={Sync3} alt="Visuelt materiale fra Sync projektet" />
          </div>

          <div className="sync-gallery-item">
            <img src={Sync4} alt="Visuelt materiale fra Sync projektet" />
          </div>

          <div className="sync-gallery-item">
            <img src={Sync5} alt="Visuelt materiale fra Sync projektet" />
          </div>
        </div>
      </section>

      {/* =====================================================
          REFLEKSION
      ====================================================== */}

      <section className="sync-reflection">
        <div className="project-container sync-reflection-grid">
          <p className="project-label">Refleksion</p>

          <div className="sync-reflection-text">
            <h2>Et projekt i mindre skala</h2>

            <p>
              Sync gav mig erfaring med at arbejde ud fra en anden persons
              ønsker og omsætte dem til en konkret visuel løsning. Det var
              samtidig en mulighed for at arbejde mere selvstændigt og afgrænset
              end i mine større studieprojekter.
            </p>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
