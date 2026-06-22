import "../css/projekter.css";
import Projekter from "../components/Projekter";

export default function ProjektPage() {
  return (
    <div className="container">
      <section className="projekt-titler">
        <p>PubHub 2026</p>
        <p>Storcenter Nord akvarie 2026</p>
        <p>Blandede projekter</p>
      </section>
      <Projekter />
    </div>
  );
}
