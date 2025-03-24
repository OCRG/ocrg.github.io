import { useParams, Link } from 'react-router-dom';
import MarkdownContent from '../components/MarkdownContent';
import './DocumentationPage.css';

const DocumentationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const docPath = slug ? `/docs/${slug}.md` : '/docs/index.md';

  const navItems = [
    { name: 'Index', slug: 'index' },
    { name: 'Getting Started', slug: 'getting-started' },
    { name: 'API Reference', slug: 'api-reference' },
    { name: 'Contributing', slug: 'contributing' },
    { name: 'Project Overview', slug: 'project-overview' },
  ];

  return (
    <div className="documentation-page">
      <div className="doc-sidebar">
        <h3>Documentation</h3>
        <nav className="doc-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.slug} className={slug === item.slug ? 'active' : ''}>
                <Link to={`/docs/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="doc-content">
        <MarkdownContent filePath={docPath} />
      </div>
    </div>
  );
};

export default DocumentationPage; 