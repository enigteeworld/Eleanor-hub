import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CausesPage from './pages/CausesPage';
import GrantsPage from './pages/GrantsPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import ReportsPage from './pages/ReportsPage';
import FAQsPage from './pages/FAQsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#F6F4EF]">
        {/* Grain overlay */}
        <div className="grain-overlay" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content with routing */}
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/causes" element={<CausesPage />} />
            <Route path="/grants" element={<GrantsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
