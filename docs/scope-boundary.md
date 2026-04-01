# Scope Boundary

This toolkit focuses on package-content and release-hygiene controls.

## Covered

- publish artifact inspection (`npm pack --dry-run --json`)
- source map and risky file detection
- tarball size/drift detection
- CI gates for packaging regressions
- incident response workflow for packaging issues

## Not Covered (use complementary tooling)

- dependency malware scanning
- SBOM generation
- artifact signing/provenance attestations
- secret scanning across full source history
- container image release controls

## Why this matters

Clear boundaries help teams combine this toolkit with other supply-chain controls without overlap confusion.
