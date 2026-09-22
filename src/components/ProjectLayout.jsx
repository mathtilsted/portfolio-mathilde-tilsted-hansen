import { Link } from "react-router-dom";
import "../css/project-layout.css";

export default function ProjectLayout({
  title,
  label,
  intro,
  role,
  collaboration,
  focus,
  previousProject,
  nextProject,
  hero,
  children,
}) {
  return (
    <main className="project-layout">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="project-hero">
        <div className="project-container">
          <Link to="/projekter" className="project-back">
            ← Alle projekter
          </Link>

          <div className="project-hero-grid">
            <div className="project-hero-content">
              <p className="project-label">{label}</p>
              <h2>{title}</h2>
              <p className="project-intro">{intro}</p>

              <div className="project-meta">
                <div className="project-meta-item">
                  <span>Rolle</span>
                  <p>{role}</p>
                </div>

                <div className="project-meta-item">
                  <span>Samarbejde</span>
                  <p>{collaboration}</p>
                </div>

                <div className="project-meta-item">
                  <span>Fokus</span>
                  <p>{focus}</p>
                </div>
              </div>
            </div>

            <div className="project-hero-media">
              <div className="project-hero-blob" />

              {hero}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDHOLD
      ====================================================== */}

      <div className="project-content">{children}</div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <nav
        className="project-navigation project-container"
        aria-label="Navigation mellem projekter"
      >
        <div className="project-navigation-side">
          {previousProject && (
            <Link to={previousProject.path} className="project-navigation-link">
              <span>← Forrige projekt</span>
              <strong>{previousProject.title}</strong>
            </Link>
          )}
        </div>

        <Link to="/projekter" className="project-navigation-all">
          <span className="project-navigation-icon">
            <i />
            <i />
            <i />
            <i />
          </span>
          Alle projekter
        </Link>

        <div className="project-navigation-side project-navigation-side--next">
          {nextProject && (
            <Link
              to={nextProject.path}
              className="project-navigation-link project-navigation-link--next"
            >
              <span>Næste projekt →</span>
              <strong>{nextProject.title}</strong>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
