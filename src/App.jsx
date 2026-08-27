import HomePage from "./pages/Homepage";
import ProjektPage from "./pages/ProjektPage";
import KontaktPage from "./pages/KontaktPage";
import OmPage from "./pages/OmPage";
import NavBar from "./components/NavBar";
import BlandedeProjekter from "./pages/BlandedeProjekterPage";
import PubHub from "./pages/PubHubPage";
import Akvarie from "./pages/AkvariePage";
import { HashRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projekter" element={<ProjektPage />} />
        <Route path="/kontakt-mig" element={<KontaktPage />} />
        <Route path="/om-mig" element={<OmPage />} />
        <Route path="/blandede-projekter" element={<BlandedeProjekter />} />
        <Route path="/pubhub" element={<PubHub />} />
        <Route path="/akvarie" element={<Akvarie />} />
      </Routes>
    </HashRouter>
  );
}
