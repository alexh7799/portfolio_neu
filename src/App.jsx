import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";
import './App.css'
import ScrollToTop from "./share/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
