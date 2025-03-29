#!/usr/bin/env python3
"""
Tests for the MkDocs site.
"""
import os
import re
import yaml
import pytest
from pathlib import Path
import subprocess

# Create a custom YAML loader that ignores unknown tags
class IgnoreUnknownTagsLoader(yaml.SafeLoader):
    def ignore_unknown_tag(self, node):
        return None

# Create a custom function to safely load YAML with unknown tags
def safe_load_yaml(file_path):
    # Register the constructor for handling unknown tags
    IgnoreUnknownTagsLoader.add_constructor(None, IgnoreUnknownTagsLoader.ignore_unknown_tag)
    
    with open(file_path, 'r') as f:
        try:
            return yaml.load(f, Loader=IgnoreUnknownTagsLoader)
        except yaml.YAMLError as e:
            print(f"Error parsing YAML: {e}")
            return None

class TestMkDocs:
    """Tests for the MkDocs site."""

    def setup_method(self, method):
        """Set up paths for testing."""
        self.root_dir = Path(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
        self.docs_dir = self.root_dir / 'docs'
        self.config_file = self.root_dir / 'mkdocs.yml'

    def test_mkdocs_config_exists(self):
        """Test that the MkDocs config file exists."""
        assert self.config_file.exists()

    def test_mkdocs_config_valid(self):
        """Test that the MkDocs config file is valid YAML."""
        # Use our custom safe loader
        config = safe_load_yaml(self.config_file)
        
        # Check if the config was loaded successfully
        assert config is not None, "Failed to load mkdocs.yml"
        
        # Check required keys
        assert 'site_name' in config, "site_name key missing from mkdocs.yml"
        assert config['site_name'], "site_name is empty in mkdocs.yml"

    def test_docs_dir_exists(self):
        """Test that the docs directory exists."""
        assert self.docs_dir.exists(), "docs directory does not exist"
        assert self.docs_dir.is_dir(), "docs is not a directory"

    def test_index_exists(self):
        """Test that the index.md file exists."""
        index = self.docs_dir / 'index.md'
        assert index.exists(), "index.md file does not exist"

    def test_all_nav_files_exist(self):
        """Test that all files referenced in the nav section exist."""
        # Use our custom safe loader
        config = safe_load_yaml(self.config_file)
        
        # Check if the config was loaded successfully
        assert config is not None, "Failed to load mkdocs.yml"
        
        if 'nav' in config:
            # Helper function to check if files exist
            def check_nav_files(nav_items, base_path=self.docs_dir):
                for item in nav_items:
                    if isinstance(item, dict):
                        for key, value in item.items():
                            if isinstance(value, list):
                                check_nav_files(value, base_path)
                            elif isinstance(value, str) and value.endswith('.md'):
                                file_path = base_path / value
                                assert file_path.exists(), f"File {value} referenced in nav does not exist"

            check_nav_files(config['nav'])

    def test_no_broken_internal_links(self):
        """Test that there are no broken internal links in the Markdown files."""
        # Load mkdocs config to check use_directory_urls setting
        config = safe_load_yaml(self.config_file)
        use_directory_urls = config.get('use_directory_urls', True)
        
        # This pattern matches markdown links: [text](link)
        # but excludes links starting with http, https, mailto, etc.
        internal_link_pattern = re.compile(r'\[.*?\]\(((?!http|mailto)[^)]+)\)')
        
        # Also match HTML anchor tags
        html_link_pattern = re.compile(r'<a\s+(?:[^>]*?\s+)?href="((?!http|mailto)[^"]+)"')

        for md_file in self.docs_dir.glob('**/*.md'):
            with open(md_file, 'r') as f:
                content = f.read()
            
            # Check markdown links
            for match in internal_link_pattern.finditer(content):
                link = match.group(1)
                
                # Skip anchor links and external links
                if link.startswith('#') or link.startswith('http'):
                    continue
                
                # Handle relative links
                if not link.startswith('/'):
                    # Get the directory of the current file
                    base_dir = md_file.parent.relative_to(self.docs_dir)
                    link_path = self.docs_dir / base_dir / link
                else:
                    # Handle absolute links (within the docs directory)
                    link = link.lstrip('/')
                    link_path = self.docs_dir / link
                
                # Get the corresponding .md file path (without the extension)
                md_path = link_path.with_suffix('.md')
                
                # First verify the target markdown file exists
                assert md_path.exists(), f"Target markdown file does not exist for link: {link} in {md_file}"
                
                # If use_directory_urls is False, verify link uses .html extension
                if not use_directory_urls:
                    assert link.endswith('.html'), f"Link should use .html extension: {link} in {md_file}"
            
            # Check HTML anchor tags
            for match in html_link_pattern.finditer(content):
                link = match.group(1)
                
                # Skip anchor links and external links
                if link.startswith('#') or link.startswith('http'):
                    continue
                
                # Handle relative links
                if not link.startswith('/'):
                    # Get the directory of the current file
                    base_dir = md_file.parent.relative_to(self.docs_dir)
                    link_path = self.docs_dir / base_dir / link
                else:
                    # Handle absolute links (within the docs directory)
                    link = link.lstrip('/')
                    link_path = self.docs_dir / link
                
                # Get the corresponding .md file path (without the extension)
                md_path = link_path.with_suffix('.md')
                
                # First verify the target markdown file exists
                assert md_path.exists(), f"Target markdown file does not exist for link: {link} in {md_file}"
                
                # If use_directory_urls is False, verify link uses .html extension
                if not use_directory_urls:
                    assert link.endswith('.html'), f"Link should use .html extension: {link} in {md_file}" 