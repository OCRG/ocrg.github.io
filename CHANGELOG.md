# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- None

### Changed
- None

### Fixed
- None

### Deprecated
- None

### Removed
- None

### Security
- None

## [0.0.4-alpha] - 2024-04-02

### Added
- Customized footer with OCRG branding, styled links, and terminal theme matching
- Added custom 404 page with terminal theme styling, updated components on 404 page
- Added comprehensive issue documentation and label system to contributing guidelines

### Changed
- Updated feature card styling with terminal theme colors and hover effects
- Added distinct gradient backgrounds for hero sections on different pages
- Fixed project navigation structure to use single page instead of directory
- Improved button styling to match terminal theme
- Enhanced visual hierarchy with consistent color scheme
- Updated all internal links to use .html extension for use_directory_urls: false compatibility
- Updated link testing to enforce correct extensions based on use_directory_urls setting
- Removed --strict flag from CI build to handle .html link extensions
- Added documentation about link strategy in mkdocs.yml
- Consolidated contributing guidelines into single source of truth and updated README link

### Fixed
- Restructured header override in `docs/overrides/main.html` to properly integrate the Tor banner using `{{ super() }}`. This resolves styling conflicts with the default theme header elements, particularly the GitHub repository link.
- Fixed white text on white background in feature cards
- Resolved navigation issues in projects section
- Improved contrast and readability across all components
- Fixed link checker to properly handle internal MkDocs links without .md extensions
- Fixed 404 page links to use consistent .html extension format
- Fixed HTML anchor tags in about.md, projects/index.md, and projects/template.md to use correct .html extensions
- Fixed all Markdown links in documentation files to use .html extension for use_directory_urls: false compatibility
- Fixed relative paths in project section links to correctly reference parent directory

### Deprecated
- None

### Removed
- None

### Security
- None

## [0.0.3-alpha] - 2024-03-26

### Added
- Added global privacy banner promoting Tor Browser usage

### Changed
- Improved GitHub Actions workflow for better CI/CD compatibility
- Enhanced Vite configuration for CI environments

### Deprecated
- None

### Removed
- None

### Fixed
- Addressed Rollup dependency issues in GitHub Actions
- Fixed build failures related to optional native dependencies

### Security
- None

## [0.0.2-alpha] - 2024-03-24
### Changed
- Improved GitHub Actions workflow for better CI/CD compatibility
- Enhanced Vite configuration for CI environments

### Fixed
- Addressed Rollup dependency issues in GitHub Actions
- Fixed build failures related to optional native dependencies

## [0.0.1-alpha] - 2024-03-24 (unreleased, refactored)
### Changed
- Migrated from Jekyll to Vite with React and TypeScript
- Updated dependencies to ensure compatibility
- Restructured documentation site architecture
- Changed BrowserRouter to HashRouter for better GitHub Pages compatibility
- Updated path configurations for GitHub Pages deployment

### Fixed
- GitHub Pages deployment issues by updating path configurations
- Package version compatibility issues

### Added
- React components structure for modern UI
- TypeScript support for type safety
- Improved developer experience with hot module reloading 