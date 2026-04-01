# Claude Code Leak FAQ (GitHub Repository Guide)

This page is for developers searching terms like:

- `claude code leak github`
- `claude code leak repo`
- `claw code leak`

It summarizes what this repository is and how to use it safely.

## What is this repository?

This is an educational packaging-security case study built from public reporting and official documentation.  
It does not host or mirror proprietary leaked code.

## What happened in the Claude Code leak incident?

Public reports describe an npm packaging incident where release artifacts exposed unintended source-related files.  
The core lesson is release pipeline hardening, not reverse engineering.

## Is this a Claude Code leak archive?

No.  
This project is a prevention toolkit:

- package audit scripts
- CI guardrails
- manifest drift detection
- maintainer checklists and runbooks

## How do I use this in my own repo?

Start here:

1. `docs/adopt-in-5-minutes.md`
2. `scripts/audit-package.mjs`
3. `.github/workflows/package-audit.yml`

Optional:

- `scripts/generate-pack-manifest.mjs`
- `scripts/compare-pack-manifest.mjs`

## Why include typo terms like "claw code leak"?

Many users discover incident resources through imperfect spellings.  
Including common variants helps route users to a responsible, prevention-focused resource.

## Where are the references?

See:

- `data/sources.json`
- `data/timeline.json`

Both are curated for transparency and confidence labeling.
