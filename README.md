# OCRG Documentation

[![CI/CD](https://github.com/OCRG/ocrg.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/OCRG/ocrg.github.io/actions/workflows/deploy.yml)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/OCRG/ocrg.github.io?style=flat&cache=no)](https://github.com/OCRG/ocrg.github.io/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/OCRG/ocrg.github.io)](https://github.com/OCRG/ocrg.github.io/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/OCRG/ocrg.github.io)](https://github.com/OCRG/ocrg.github.io/pulls)

This repository contains the documentation for OCRG projects, hosted on GitHub Pages. 
The site is built with Vite and React with TypeScript.

## Local Development

To run the documentation site locally:

1. Install Node.js and npm (recommended Node.js version 18+)

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:5173` in your browser

## Building for Production

To build the site for production:

```bash
npm run build
```

The built site will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Submit a pull request

## License

This documentation is licensed under the MIT License - see the LICENSE file for details.

## Releases

We follow semantic versioning for our releases. Each release is tagged with a version number (e.g., v1.0.0) and includes:

- Release notes
- Changelog
- Documentation updates

To create a new release:

1. Update version numbers in relevant files
2. Update the CHANGELOG.md
3. Create a new tag:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```
4. Create a new release on GitHub with release notes

For more detailed information on the release process, see [RELEASING.md](RELEASING.md).
