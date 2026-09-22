import HomePage from "./pages/Homepage";
import ProjektOversigtPage from "./pages/ProjektOversigtPage";
import PubHubPage from "./pages/PubHubPage";
import MellemrumPage from "./pages/MellemrumPage";
import VuuhPage from "./pages/VuuhPage";
import SyncPage from "./pages/SyncPage";
import KontaktPage from "./pages/KontaktPage";
import OmPage from "./pages/OmPage";
import NavBar from "./components/NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projekter" element={<ProjektOversigtPage />} />
        <Route path="/projekter/pubhub" element={<PubHubPage />} />
        <Route path="/projekter/mellemrum" element={<MellemrumPage />} />
        <Route path="/projekter/vuuh" element={<VuuhPage />} />
        <Route path="/projekter/sync" element={<SyncPage />} />
        <Route path="/kontakt-mig" element={<KontaktPage />} />
        <Route path="/om-mig" element={<OmPage />} />
      </Routes>
    </HashRouter>
  );
}
