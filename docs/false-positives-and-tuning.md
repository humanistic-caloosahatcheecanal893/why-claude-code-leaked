# False Positives and Policy Tuning

Security checks are useful only when maintainers trust signal quality.

## Common False Positives

## Intentional source map publishing

Some libraries intentionally publish source maps for consumer debugging.

Tuning:

- remove `.map` from `blockedExtensions`
- or use a less strict preset for public libraries

## Legitimate large assets

CLI bundles or WASM artifacts may exceed default thresholds.

Tuning:

- increase `maxBytes`
- track expected growth in baseline manifest

## Generated files with suspicious names

Build output may resemble risky patterns but be expected.

Tuning:

- narrow `highRiskPatterns`
- rename generated output to avoid ambiguous naming

## Monorepo packaging paths

Nested package layouts can cause unexpected pack output.

Tuning:

- run audit from package directory, not repo root
- use package-specific config files per workspace

## Recommended Tuning Process

1. Start with default config.
2. Capture first failures and classify true/false positives.
3. Adjust config with minimal exceptions.
4. Re-run in CI for 1-2 weeks and refine.
5. Promote stricter rules only after signal is stable.
