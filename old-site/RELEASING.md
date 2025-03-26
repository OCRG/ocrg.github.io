# Release Process

This document outlines the process for creating new releases of the OCRG documentation.

## Release Checklist

### 1. Update Documentation
- [ ] Review and update all documentation
- [ ] Update CHANGELOG.md with new changes
- [ ] Ensure all links are working
- [ ] Test the site locally

### 2. Version Bump
- [ ] Determine the next version number following [Semantic Versioning](https://semver.org/)
  - MAJOR version for incompatible API changes
  - MINOR version for backwards-compatible functionality additions
  - PATCH version for backwards-compatible bug fixes

### 3. Create Release
1. Update CHANGELOG.md:
   ```bash
   # Move items from [Unreleased] to new version section
   ## [1.0.1] - YYYY-MM-DD
   ### Added
   - New feature 1
   - New feature 2
   ```

2. Create and push the tag:
   ```bash
   git add CHANGELOG.md
   git commit -m "Prepare for release v1.0.1"
   git tag -a v1.0.1 -m "Release version 1.0.1"
   git push origin main --tags
   ```

3. Create GitHub Release:
   - Go to [Releases](https://github.com/OCRG/ocrg.github.io/releases)
   - Click "Create a new release"
   - Select the tag you just created
   - Copy relevant changes from CHANGELOG.md
   - Add any additional release notes
   - Publish the release

### 4. Post-Release
- [ ] Verify the site is updated at https://ocrg.github.io
- [ ] Update any external references if needed
- [ ] Announce the release in relevant channels

## Release Notes Template

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- New features

### Changed
- Changes to existing features

### Deprecated
- Soon-to-be removed features

### Removed
- Features removed in this release

### Fixed
- Bug fixes

### Security
- Security fixes
```

## Troubleshooting

If you encounter issues during the release process:

1. **Tag already exists**
   ```bash
   git tag -d v1.0.1  # Delete local tag
   git push origin :refs/tags/v1.0.1  # Delete remote tag
   ```

2. **Release failed**
   - Check GitHub Actions logs
   - Verify all required files are present
   - Ensure all dependencies are up to date

3. **Site not updating**
   - Check GitHub Pages settings
   - Verify the build completed successfully
   - Clear your browser cache 