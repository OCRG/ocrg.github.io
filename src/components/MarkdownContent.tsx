import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import './MarkdownContent.css';

interface MarkdownContentProps {
  filePath: string;
}

const MarkdownContent = ({ filePath }: MarkdownContentProps) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load content');
        }
        return response.text();
      })
      .then(text => {
        // Remove front matter if present (between --- markers)
        const content = text.replace(/^---(.|\n)*?---/, '').trim();
        setContent(content);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [filePath]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="markdown-content">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent; 