#!/usr/bin/env python3
"""
Script to check for broken external links in the MkDocs site.
"""
import os
import re
import sys
import time
import requests
from pathlib import Path
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed

# Timeout for requests (in seconds)
TIMEOUT = 10
# User agent for requests
USER_AGENT = 'Mozilla/5.0 (compatible; LinkChecker/1.0;)'
# Max number of retries
MAX_RETRIES = 3

# List of domains to exclude from checking (known to block automated requests)
EXCLUDED_DOMAINS = [
    'linkedin.com',  # LinkedIn blocks bot requests with 999 status code
    'lab.github.com'  # GitHub Learning Lab has been deprecated
]

def is_excluded_domain(url):
    """Check if the URL's domain is in the excluded list."""
    parsed_url = urlparse(url)
    domain = parsed_url.netloc
    return any(excluded in domain for excluded in EXCLUDED_DOMAINS)

def is_valid_url(url):
    """Check if a URL is valid."""
    try:
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except Exception:
        return False

def check_external_link(url, origin_file=None):
    """Check if an external link is working."""
    if is_excluded_domain(url):
        print(f"Checking: {url}\n  ⚠️ Skipped (excluded domain)")
        return True, "Excluded domain"
        
    print(f"Checking: {url}")
    headers = {'User-Agent': USER_AGENT}
    
    for attempt in range(MAX_RETRIES):
        try:
            # First try a HEAD request (faster)
            response = requests.head(url, timeout=TIMEOUT, headers=headers)
            
            # Some servers don't like HEAD requests, so fall back to GET if needed
            if response.status_code >= 400:
                response = requests.get(url, timeout=TIMEOUT, headers=headers)
            
            if response.status_code < 400:
                print(f"  ✅ OK ({response.status_code})")
                return True, response.status_code
            else:
                print(f"  ❌ Broken link: Failed with status code: {response.status_code}")
                return False, f"Failed with status code: {response.status_code}"
        
        except requests.RequestException as e:
            if attempt < MAX_RETRIES - 1:
                time.sleep(1)  # Wait before retrying
                continue
            print(f"  ❌ Broken link: Request failed: {e}")
            return False, f"Request failed: {e}"
    
    return False, "Max retries exceeded"

def find_external_links(content):
    """Find all external links in the content using regex for both Markdown and HTML links."""
    # Markdown links: [text](http://example.com)
    md_links = re.findall(r'\[.+?\]\((https?://[^\s\)]+)', content)
    
    # HTML links: <a href="http://example.com">
    html_links = re.findall(r'<a\s+(?:[^>]*?\s+)?href="(https?://[^"]*)"', content)
    
    # Combine and filter unique links
    links = set()
    for link in md_links + html_links:
        # Clean the link (remove trailing characters that aren't part of the URL)
        link = re.sub(r'[,\.;\)]$', '', link)
        # Skip internal MkDocs links (both with and without .md extension)
        if not re.match(r'^[a-zA-Z0-9\-_/]+\.md?$', link) and is_valid_url(link):
            links.add(link)
    
    return links

def check_links_in_directory(directory):
    """Check all external links in Markdown files within a directory."""
    print(f"Checking links in {directory}")
    broken_links = {}
    all_links = set()
    link_to_files = {}
    
    # Find all external links in Markdown files
    for path in Path(directory).glob('**/*.md'):
        try:
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                links = find_external_links(content)
                all_links.update(links)
                
                # Track which files each link appears in
                rel_path = path.relative_to(Path(directory).parent)
                for link in links:
                    if link not in link_to_files:
                        link_to_files[link] = []
                    link_to_files[link].append(str(rel_path))
        except Exception as e:
            print(f"Error reading file {path}: {e}")
    
    print(f"Found {len(all_links)} unique external links to check")
    
    # Check links
    for url in all_links:
        success, result = check_external_link(url)
        if not success and not is_excluded_domain(url):
            for file_path in link_to_files[url]:
                if file_path not in broken_links:
                    broken_links[file_path] = []
                broken_links[file_path].append((url, result))
    
    # Report broken links
    if broken_links:
        print("\nBroken links found:")
        for file_path, links in broken_links.items():
            for link, error in links:
                print(f"{file_path}: {link} - {error}")
        return False
    else:
        print("\nAll links are working!")
        return True

def main():
    """Main function."""
    if len(sys.argv) < 2:
        root_dir = Path(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
        docs_dir = root_dir / 'docs'
    else:
        docs_dir = Path(sys.argv[1])
    
    if not docs_dir.exists() or not docs_dir.is_dir():
        print(f"Error: {docs_dir} is not a valid directory")
        return 1
    
    # Call check_links_in_directory and get the success status
    success = check_links_in_directory(docs_dir)
    
    # Return exit code based on success status
    return 0 if success else 1

if __name__ == '__main__':
    sys.exit(main()) 