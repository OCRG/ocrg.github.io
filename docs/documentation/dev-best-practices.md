---
layout: default
title: Development Best Practices
parent: Documentation
nav_order: 5
---

# Development Best Practices

This guide outlines the best practices for development workflows, Git usage, and deployment processes for OCRG projects.

## Trunk-Based Development

We follow a trunk-based development workflow, which means:

- The main branch (`main`) is always stable and deployable
- Feature development happens in short-lived feature branches
- Feature branches are merged back to main frequently through pull requests
- Long-lived feature branches are avoided

### Benefits of Trunk-Based Development

- Reduces merge conflicts
- Enables continuous integration
- Improves collaboration
- Makes deployment more reliable

## Git Workflow Best Practices

### Branching Strategy

1. **Main Branch**: The `main` branch is the primary branch and is always deployable.
2. **Production Branch**: The `gh-pages` branch contains the built site and is automatically updated when changes are merged to `main`.
3. **Feature Branches**: Create a feature branch for each new feature or bug fix:
   ```bash
   # Create and switch to a new branch
   git checkout -b feature/descriptive-feature-name

   # Switch to an existing branch
   git checkout branch-name

   # List all branches
   git branch

   # List all branches including remote
   git branch -a

   # Push a new branch to GitHub
   git push -u origin branch-name

   # Update your branch with latest main
   git checkout main
   git pull
   git checkout your-branch
   git merge main
   ```

4. **Naming Conventions**: Use prefixes for branch names:
   - `feature/` for new features
   - `bugfix/` for bug fixes
   - `hotfix/` for urgent production fixes
   - `docs/` for documentation updates

### Commit Practices

#### Atomic Commits

Make small, focused commits that do one thing well:

- Each commit should represent a single logical change
- Keep commits small and focused on a single aspect
- Ensure each commit leaves the codebase in a working state

**Good Atomic Commit Example:**
```bash
git add src/components/Button.tsx
git commit -m "Fix Button component hover state styling"
```

#### Commit Messages

Write clear, descriptive commit messages:

- Use the imperative mood ("Add feature" not "Added feature")
- First line should be 50 characters or less (summary)
- Optionally, follow with a blank line and detailed explanation
- Reference issue numbers when applicable

**Good Commit Message Format:**
```
Fix release badge in README

- Updated the badge URL to use cache-busting parameters
- Ensures badge always shows the latest release version
- Fixes issue #42
```

### Pull Request Workflow

1. **Create Feature Branch** from main:
   ```bash
   # Create and switch to new branch
   git checkout -b feature/your-feature
   
   # Push to GitHub
   git push -u origin feature/your-feature
   ```

2. **Make Changes** with good commits
3. **Push Branch** to the remote repository:
   ```bash
   git push origin feature/your-feature
   ```
4. **Create Pull Request** with a clear description:
   - What changes were made
   - Why they were made
   - How to test them
   - Any related issues
5. **Code Review** by at least one other team member
6. **Address Feedback** if any changes are requested:
   ```bash
   # Make changes locally
   git add .
   git commit -m "Address review feedback"
   git push origin feature/your-feature
   ```
7. **Merge** the PR using the "Merge" strategy (or "Squash and Merge" for cleanup)
8. **Delete the Branch** after merging:
   ```bash
   # Delete local branch
   git branch -d feature/your-feature
   
   # Delete remote branch
   git push origin --delete feature/your-feature
   ```

### Code Review Guidelines

- Be respectful and constructive
- Focus on the code, not the person
- Look for:
  - Bugs and edge cases
  - Code clarity and readability
  - Performance issues
  - Consistency with existing code
  - Test coverage

## Deployment Process

We use GitHub Actions for continuous integration and deployment:

1. **Automated Tests** run on every push and PR
2. **Build Process** creates production-ready assets
3. **Deployment** happens automatically when changes are merged to main:
   - The site is built using MkDocs
   - The built site is deployed to the `gh-pages` branch
   - The deployment only occurs on merges to `main`, not on PRs
   - The `gh-pages` branch is automatically updated with the latest build

### Release Process

1. **Semantic Versioning**: We follow semantic versioning (MAJOR.MINOR.PATCH)
2. **Changelog**: Update the CHANGELOG.md file with all notable changes
3. **Tags**: Create a Git tag for each release:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```
4. **Release Notes**: Create detailed release notes on GitHub

## Development Environment Setup

Ensure your development environment is consistent:

1. Use the recommended Node.js version (see README)
2. Install all dependencies with `npm install`
3. Follow the code style guidelines with linters and formatters
4. Run tests locally before pushing changes

## Conclusion

Following these best practices ensures:

- Consistent, high-quality code
- Smooth collaboration between team members
- Reliable, reproducible deployments
- Clear project history and documentation

Remember: The goal is to make development efficient, collaborative, and maintainable! 

Other useful commands
```
git commit --amend --no-edit
