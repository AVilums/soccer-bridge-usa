import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { useEffect } from 'react';

function PathReset() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Force scroll to top on refresh
    // We use a small timeout to ensure the browser has finished initial rendering
    // and to bypass any scroll restoration or smooth scroll issues.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    
    // Some browsers or layouts might need a tiny delay
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Double check for some mobile browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    if (location.hash) {
      navigate('/', { replace: true });
    }

    return () => clearTimeout(timer);
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <PathReset />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
