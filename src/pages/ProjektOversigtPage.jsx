import { Link } from "react-router";
import "../css/projekt-oversigt.css";

import Baggrund1 from "../assets/baggrunde/baggrund1.png";
import PubhubMappe from "../assets/projekt-sider/mapper/pubhub-mappe.svg";
import MellemrumMappe from "../assets/projekt-sider/mapper/mellemrum-mappe.svg";
import VuuhMappe from "../assets/projekt-sider/mapper/vuuh-mappe.svg";
import SyncMappe from "../assets/projekt-sider/mapper/sync-mappe.svg";
import TomMappe from "../assets/projekt-sider/mapper/mappe.svg";

const projekter = [
  {
    id: "pubhub",
    navn: "PubHub",
    billede: PubhubMappe,
    path: "/projekter/pubhub",
  },
  {
    id: "mellemrum",
    navn: "Mellemrum",
    billede: MellemrumMappe,
    path: "/projekter/mellemrum",
  },
  {
    id: "vuuh",
    navn: "Vuuh",
    billede: VuuhMappe,
    path: "/projekter/vuuh",
  },
  {
    id: "sync",
    navn: "Sync",
    billede: SyncMappe,
    path: "/projekter/sync",
  },
];

export default function ProjektPage() {
  return (
    <main className="projektoversigt">
      <img
        className="baggrund-projekt-siden"
        src={Baggrund1}
        alt=""
        aria-hidden="true"
      />

      <section className="projektoversigt-indhold">
        <header className="projektoversigt-header">
          <h2>Projekter</h2>

          <p>
            Her ser du et udvalg af mine yndlingsprojekter. Bag hver mappe,
            gemmer sig et projekt jeg har arbejdet med for nyligt. Alle
            projekter har haft forskellige scopes og har udfordret mig på
            forskellige måder. Vælg en mappe og lær mere om et projekt.
          </p>
        </header>

        <div className="projekter-grid">
          {projekter.map((projekt) => (
            <Link
              key={projekt.id}
              to={projekt.path}
              className="projekt-mappe"
              aria-label={`Se projektet ${projekt.navn}`}
            >
              <img src={projekt.billede} alt="" />
            </Link>
          ))}

          <div
            className="projekt-mappe projekt-mappe--kommende"
            aria-label="Nyt projekt på vej"
          >
            <img src={TomMappe} alt="" />

            <span className="projekt-mappe-status">Nyt projekt på vej</span>
          </div>
        </div>
      </section>
    </main>
  );
}
