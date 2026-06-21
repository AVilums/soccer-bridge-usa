import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/' + target);
      setIsNavOpen(false);
    } else {
      setIsNavOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsNavOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Clear hash from URL
      if (window.location.hash) {
        window.history.replaceState(null, '', '/');
      }
    }
  };

  return (
    <nav>
      <Link to="/" className="nav-logo" onClick={handleLogoClick}>
        <img src={logo} alt="Soccer Bridge USA" />
      </Link>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`} id="navLinks">
        <a href={"#about"} onClick={(e) => handleLinkClick(e, '#about')}>About</a>
        <a href={"#how"} onClick={(e) => handleLinkClick(e, '#how')}>How It Works</a>
        <a href={"#services"} onClick={(e) => handleLinkClick(e, '#services')}>Services</a>
        <a href={"#contact"} onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
        <a href={"#apply"} className="nav-cta" onClick={(e) => handleLinkClick(e, '#apply')}>Apply Now</a>
      </div>
      <button className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
