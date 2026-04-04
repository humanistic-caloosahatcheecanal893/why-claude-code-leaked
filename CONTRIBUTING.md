# Contributing

Thanks for helping improve package security practices.

**First time contributing to open source?** You can help by fixing typos, improving explanations for beginners, or adding tests—no deep security background required. When you change factual claims about the incident, include a link to a reputable source in your pull request.

## Contribution Types

- CI/CD hardening improvements
- Packaging audit scripts
- Reference-quality security documentation
- Public-source timeline and reference curation

## Rules

- Keep content original and educational
- Do not include proprietary leaked source code
- Prefer official docs and reputable reporting
- Mark uncertain claims as unverified

## Local Validation

Run before submitting:

```bash
npm test
node scripts/audit-package.mjs
```

Also recommended:

```bash
npm pack --dry-run --json
```

## Pull Request Expectations

- Explain what changed and why
- Link to supporting sources for factual claims
- Keep changes scoped and easy to review
