import "../css/kontakt.css";

export default function KontaktPage() {
  return (
    <div className="kontakt-siden">
      <div className="sektion">
        <p className="titel">Vil du vide mere?</p>

        <div className="kontakt-knapper">
          <a
            className="kontakt-knap"
            href="https://github.com/mathtilsted?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <a
            className="kontakt-knap"
            href="https://www.linkedin.com/in/mathilde-tilsted-hansen-125513347/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>

          <a className="kontakt-knap" href="mailto:mathildetilsted@gmail.com">
            mathildetilsted@gmail.com
          </a>

          <a className="kontakt-knap" href="tel:+4551147110">
            +45 51 14 71 10
          </a>

          <a
            className="kontakt-knap"
            href={`${import.meta.env.BASE_URL}Mathilde-Tilsted-CV.pdf`} //cv download virker både lokalt og efter deploye
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
