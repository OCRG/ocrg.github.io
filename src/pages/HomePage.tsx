import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to OCRG Documentation</h1>
        <p>This is the documentation site for OCRG projects. Here you'll find guides, tutorials, and reference documentation.</p>
        <div className="cta-buttons">
          <Link to="/docs/getting-started" className="btn btn-primary">Get Started</Link>
          <a href="https://github.com/OCRG" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h2>Getting Started</h2>
          <p>Learn the basics and get up and running quickly with our getting started guide.</p>
          <Link to="/docs/getting-started" className="feature-link">Read more →</Link>
        </div>
        
        <div className="feature-card">
          <h2>API Reference</h2>
          <p>Detailed API documentation for developers working with OCRG projects.</p>
          <Link to="/docs/api-reference" className="feature-link">Read more →</Link>
        </div>
        
        <div className="feature-card">
          <h2>Dev Best Practices</h2>
          <p>Learn about our development workflow, Git practices, and deployment processes.</p>
          <Link to="/docs/dev-best-practices" className="feature-link">Read more →</Link>
        </div>
        
        <div className="feature-card">
          <h2>Contributing</h2>
          <p>Learn how to contribute to OCRG projects and make them even better.</p>
          <Link to="/docs/contributing" className="feature-link">Read more →</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 