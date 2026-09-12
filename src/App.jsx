import HomePage from "./pages/Homepage";
import ProjektOversigtPage from "./pages/ProjektOversigtPage";
import PubHubPage from "./pages/PubHubPage";
import KontaktPage from "./pages/KontaktPage";
import OmPage from "./pages/OmPage";
import NavBar from "./components/NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projekter" element={<ProjektOversigtPage />} />
        <Route path="/projekter/pubhub" element={<PubHubPage />} />
        <Route path="/kontakt-mig" element={<KontaktPage />} />
        <Route path="/om-mig" element={<OmPage />} />
      </Routes>
    </HashRouter>
  );
}
