import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About OCRG</h1>
      
      <div className="logo-container">
        <img src="./images/ocrg-banner.png" alt="OCRG Logo" className="logo" />
      </div>
      
      <section className="mission-section">
        <h2>Mission</h2>
        <p>
          The <strong>Ozark Cybersecurity Research Group (OCRG)</strong> is dedicated to understanding and mitigating cyber 
          threats through pioneering research in advanced detection and security techniques. We leverage machine learning 
          and artificial intelligence to develop novel approaches for robust threat detection—addressing challenges such as 
          cover‑source mismatch in steganalysis and enhancing cybersecurity through self‑supervised learning frameworks.
        </p>
        <p>
          In parallel with our research initiatives, we actively contribute to the open source community by releasing 
          innovative tools and frameworks, collaborating on projects, and sharing resources that empower organizations to 
          strengthen their security measures.
        </p>
      </section>
      
      <section className="research-section">
        <h2>Current Research Focus</h2>
        <div className="research-area">
          <h3>Advanced Steganalysis</h3>
          <p>
            Developing robust self‑supervised contrastive learning methods to detect hidden threats in digital media, 
            ensuring invariance to diverse cover sources.
          </p>
        </div>
        
        <div className="research-area">
          <h3>Threat Detection & Cybersecurity</h3>
          <p>
            Creating adaptive machine learning algorithms for identifying, analyzing, and mitigating emerging cyber threats 
            across varied domains.
          </p>
        </div>
        
        <div className="research-area">
          <h3>AI-Based Cybersecurity Tools</h3>
          <p>
            Designing and deploying end‑to‑end AI frameworks that operate in real time to counteract advanced persistent 
            threats and obfuscate potential attack vectors.
          </p>
        </div>
      </section>
      
      <section className="roadmap-section">
        <h2>Research Roadmap</h2>
        
        <div className="roadmap-item">
          <h3>Short-Term Goals</h3>
          <ul>
            <li>Finalize the development and pretraining of our self‑supervised steganalysis framework.</li>
            <li>
              Execute extensive hyperparameter tuning and ablation studies (e.g., evaluating temperature <em>τ</em>, 
              momentum <em>m</em>, and loss balance <em>λ</em>) to optimize performance.
            </li>
          </ul>
        </div>
        
        <div className="roadmap-item">
          <h3>Medium-Term Goals</h3>
          <ul>
            <li>
              Integrate our robust steganalysis methods with real‑time threat detection systems and validate them on 
              heterogeneous datasets.
            </li>
            <li>
              Initiate collaborative pilot projects with industry and academic partners to test and refine our approaches 
              in operational environments.
            </li>
          </ul>
        </div>
        
        <div className="roadmap-item">
          <h3>Long-Term Vision</h3>
          <ul>
            <li>
              Expand our portfolio of AI‑based cybersecurity tools to cover a broad spectrum of cyber threats, from 
              steganography to advanced intrusion methods.
            </li>
            <li>
              Continuously evolve our research agenda by incorporating new techniques, theoretical advances, and ethical 
              guidelines to stay ahead of emerging threats.
            </li>
          </ul>
        </div>
        
        <p className="roadmap-note">
          <em>Additional research directions will be announced as our team expands and new partnerships develop.</em>
        </p>
      </section>
      
      <section className="involvement-section">
        <h2>Get Involved</h2>
        <p>
          We welcome collaborations with researchers, cybersecurity professionals, and students passionate about advancing 
          threat detection and cybersecurity. Contact us to learn more about our current projects or to discuss potential 
          partnerships.
        </p>
      </section>
      
      <section className="contact-section">
        <h2>Contact</h2>
        <p>
          <a href="mailto:ocrg@brad-jackson.com">ocrg@brad-jackson.com</a>
        </p>
      </section>
    </div>
  );
};

export default AboutPage; 