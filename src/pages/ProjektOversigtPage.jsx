import { Link } from "react-router";
import "../css/projekt-oversigt.css";

import Baggrund1 from "../assets/baggrunde/baggrund1.png";
import PubhubMappe from "../assets/projekt-sider/mapper/pubhub-mappe.svg";
import MellemrumMappe from "../assets/projekt-sider/mapper/mellemrum-mappe.svg";
import VuuhMappe from "../assets/projekt-sider/mapper/vuuh-mappe.svg";
import SyncMappe from "../assets/projekt-sider/mapper/sync-mappe.svg";
import RogueMappe from "../assets/projekt-sider/mapper/rogue-mappe.svg";
import TomMappe from "../assets/projekt-sider/mapper/mappe.svg";

const projekter = [
  {
    id: "mellemrum",
    navn: "Mellemrum",
    billede: MellemrumMappe,
    path: "/projekter/mellemrum",
    preview: ["Supabase", "Authentication", "Kodestruktur"],
  },
  {
    id: "vuuh",
    navn: "Vuuh",
    billede: VuuhMappe,
    path: "/projekter/vuuh",
    preview: ["Onboarding", "UX", "Audit"],
  },
  {
    id: "rogue",
    navn: "Go Rogue",
    billede: RogueMappe,
    path: "/projekter/rogue",
    preview: ["Sub-branding", "Visuel identitet", "Re-commerce"],
  },
  {
    id: "sync",
    navn: "Sync",
    billede: SyncMappe,
    path: "/projekter/sync",
    preview: ["Logo-design", "Visuel identitet", "Freelance-case"],
  },
  {
    id: "pubhub",
    navn: "PubHub",
    billede: PubhubMappe,
    path: "/projekter/pubhub",
    preview: ["WebApp", "UX/UI", "React"],
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
            Her ser du et udvalg af mine yndlingsprojekter. Hvert projekt har
            givet mig nogle kompetencer jeg tager med videre. Prøv at vælge en
            mappe og lær mere om et projekt.
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
              <div className="projekt-dokument" aria-hidden="true">
                <span className="projekt-dokument-titel">{projekt.navn}</span>

                <ul>
                  {projekt.preview.map((punkt) => (
                    <li key={punkt}>{punkt}</li>
                  ))}
                </ul>
              </div>

              <img
                className="projekt-mappe-billede"
                src={projekt.billede}
                alt=""
              />
            </Link>
          ))}

          <div
            className="projekt-mappe projekt-mappe--kommende"
            aria-label="Nyt projekt på vej"
          >
            <img className="projekt-mappe-billede" src={TomMappe} alt="" />

            <span className="projekt-mappe-status">Nyt projekt på vej</span>
          </div>
        </div>
      </section>
    </main>
  );
}
