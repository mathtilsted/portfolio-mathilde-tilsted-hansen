import HomePage from "./pages/Homepage";
import ProjektPage from "./pages/ProjektPage";
import KontaktPage from "./pages/KontaktPage";
import OmPage from "./pages/OmPage";
import NavBar from "./components/NavBar";
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
      </Routes>
    </HashRouter>
  );
}
