import "../css/projekt-page.css";

export default function ProjektLayout({
  label = "Case study",
  title = "Projekt titel",
  intro = "En kort introduktion til projektet.",
  introLeft = "Her kan du beskrive projektets baggrund, problemstilling eller kontekst.",
  introRight = "Her kan du beskrive din rolle, proces, målgruppe eller de vigtigste overvejelser.",
  heroImage,
  heroImageAlt = "Projekt visual",
  prototypes = [],
  reflectionTitle = "Refleksion",
  reflectionText = "Her kan du skrive om hvad du lærte, hvilke udfordringer du mødte, og hvad du ville gøre anderledes.",
  reflectionImage,
  reflectionImageAlt = "Projekt refleksion",
  buttonText,
  buttonLink,
}) {
  return (
    <main className="projekt-side">
      {/* HERO */}
      <section className="projekt-hero">
        <span className="projekt-label">{label}</span>

        <h1>{title}</h1>

        <p className="projekt-intro">{intro}</p>

        {buttonLink && (
          <a
            className="display-knap"
            id="knap"
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText || "Se projekt"}
          </a>
        )}
      </section>

      {/* INTRO */}
      <section className="projekt-intro-section">
        <p>{introLeft}</p>
        <p>{introRight}</p>
      </section>

      {/* MAIN VISUAL */}
      <section className="projekt-visual">
        {heroImage ? (
          <img src={heroImage} alt={heroImageAlt} />
        ) : (
          <div className="projekt-placeholder">
            <span>Projekt visual</span>
          </div>
        )}
      </section>

      {/* GALLERY */}
      <section className="projekt-prototypes">
        <div className="section-heading">
          <span className="projekt-label">Udvalgte proces billeder</span>
          <h2>Projektet i praksis</h2>
        </div>

        <div className="prototype-grid">
          {prototypes.length > 0
            ? prototypes.map((image, index) => (
                <div className="prototype-item" key={image.id || index}>
                  <img
                    src={image.src}
                    alt={image.alt || `Projekt visual ${index + 1}`}
                  />
                </div>
              ))
            : Array.from({ length: 4 }).map((_, index) => (
                <div className="prototype-item" key={index}>
                  <div className="projekt-placeholder">
                    <span>Visual {index + 1}</span>
                  </div>
                </div>
              ))}
        </div>
      </section>

      {/* REFLECTION */}
      <section className="projekt-refleksion">
        <div className="projekt-refleksion-tekst">
          <span className="projekt-label">Eftertanke</span>

          <h2>{reflectionTitle}</h2>

          <p>{reflectionText}</p>
        </div>

        {reflectionImage ? (
          <img src={reflectionImage} alt={reflectionImageAlt} />
        ) : (
          <div className="projekt-placeholder">
            <span>Refleksions visual</span>
          </div>
        )}
      </section>
    </main>
  );
}
