import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Homepage";
import ProjektPage from "./pages/ProjektPage";
import KontaktPage from "./pages/KontaktPage";
import OmPage from "./pages/OmPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projekter" element={<ProjektPage />} />
        <Route path="/kontakt mig" element={<KontaktPage />} />
        <Route path="/om mig" element={<OmPage />} />
      </Routes>
    </BrowserRouter>
  );
}
