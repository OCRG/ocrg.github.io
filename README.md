# OCRG Documentation

[![Deploy MkDocs to GitHub Pages](https://github.com/OCRG/ocrg.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/OCRG/ocrg.github.io/actions/workflows/deploy.yml)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/OCRG/ocrg.github.io?style=flat&cache=no)](https://github.com/OCRG/ocrg.github.io/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/OCRG/ocrg.github.io)](https://github.com/OCRG/ocrg.github.io/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/OCRG/ocrg.github.io)](https://github.com/OCRG/ocrg.github.io/pulls)

This repository contains the source code for the [OCRG Documentation](https://ocrg.github.io/) website built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Features

- Responsive design for all devices
- Modern UI with Material Design principles
- Search functionality
- Comprehensive documentation and information about OCRG

## Local Development

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/OCRG/ocrg.github.io.git
   cd ocrg.github.io
   ```

2. Install dependencies:
   ```bash
   pip install mkdocs mkdocs-material
   ```

3. Start the development server:
   ```bash
   mkdocs serve
   ```

4. Open your browser and visit [http://localhost:8000](http://localhost:8000)

## Project Structure

```
mkdocs.yml          # The configuration file
docs/               # Documentation source files
├── index.md        # Homepage
├── about.md        # About page
├── contact.md      # Contact information
├── research/       # Research documentation
├── documentation/  # Usage documentation
└── assets/         # Images, CSS, and other assets
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch using GitHub Actions.

## Contributing

Please read our [Contributing Guide](https://ocrg.github.io/documentation/contributing/) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
