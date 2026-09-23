import Baggrund from "../assets/baggrunde/baggrund2.png";
import "../css/kontakt.css";

export default function KontaktPage() {
  return (
    <main className="kontakt-siden">
      <img className="baggrund" src={Baggrund} alt="" />

      <section className="kontakt-indhold">
        <h2 className="titel">Vil du vide mere?</h2>

        <div className="knap-container">
          <a
            id="knap"
            href="https://github.com/mathtilsted?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <a
            id="knap"
            href="https://www.linkedin.com/in/mathilde-tilsted-hansen-125513347/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>

          <a
            id="knap"
            href="https://candidate.dk/candidates/6ab10d0b9970e4e2ac2f007e"
            target="_blank"
            rel="noopener noreferrer"
          >
            Candidate
          </a>

          <a id="knap" href="mailto:mathildetilsted@gmail.com">
            mathildetilsted@gmail.com
          </a>

          <a id="knap" href="tel:+4551147110">
            +45 51 14 71 10
          </a>

          <a
            id="knap"
            href={`${import.meta.env.BASE_URL}mathilde-cv.pdf`}
            download
          >
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
}
