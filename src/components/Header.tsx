import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">OCRG Documentation</Link>
        </div>
        
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/docs/getting-started">Getting Started</Link></li>
            <li><Link to="/docs/api-reference">API Reference</Link></li>
            <li><Link to="/docs/contributing">Contributing</Link></li>
            <li><Link to="/about">About OCRG</Link></li>
            <li>
              <a 
                href="https://github.com/OCRG/ocrg.github.io" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 