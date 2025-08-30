import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";
import './App.css'
import ScrollToTop from "./share/ScrollToTop";
import './i18n/i18n';

/**
 * The main app component, which wraps all pages in a BrowserRouter and
 * provides a ScrollToTop component to scroll to the top of the page
 * whenever the route changes. The Routes component is used to define
 * the different routes and their corresponding page components.
 */
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
