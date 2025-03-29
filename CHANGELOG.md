# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Customized footer with OCRG branding, styled links, and terminal theme matching

### Changed
- Updated feature card styling with terminal theme colors and hover effects
- Added distinct gradient backgrounds for hero sections on different pages
- Fixed project navigation structure to use single page instead of directory
- Improved button styling to match terminal theme
- Enhanced visual hierarchy with consistent color scheme

### Fixed
- Restructured header override in `docs/overrides/main.html` to properly integrate the Tor banner using `{{ super() }}`. This resolves styling conflicts with the default theme header elements, particularly the GitHub repository link.
- Fixed white text on white background in feature cards
- Resolved navigation issues in projects section
- Improved contrast and readability across all components

### Deprecated
- None

### Removed
- None

### Security
- None

## [0.0.3] - 2024-03-26

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

## [0.0.2] - 2024-03-24
### Changed
- Improved GitHub Actions workflow for better CI/CD compatibility
- Enhanced Vite configuration for CI environments

### Fixed
- Addressed Rollup dependency issues in GitHub Actions
- Fixed build failures related to optional native dependencies

## [0.0.1] - 2024-03-24
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