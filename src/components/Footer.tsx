import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>OCRG Documentation</h3>
            <p>Documentation for OCRG projects.</p>
          </div>
          
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><a href="https://github.com/OCRG" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://github.com/OCRG/ocrg.github.io/issues" target="_blank" rel="noopener noreferrer">Report Issue</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} OCRG. All rights reserved.</p>
          <p>Licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 