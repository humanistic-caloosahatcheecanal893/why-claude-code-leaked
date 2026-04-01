# Threat Model Matrix

| Risk | Detection Method | Preventive Control | Repo Asset |
|---|---|---|---|
| Source maps accidentally shipped | Blocked extension check (`.map`) | Fail build when maps are included | `scripts/audit-package.mjs`, `package-audit.config.json` |
| Sensitive files in package tarball | High-risk regex patterns | Deny risky paths/extensions in policy | `scripts/audit-package.mjs`, `configs/presets/*.json` |
| Unexpected tarball growth | File size + total drift comparison | Baseline manifest and CI gate | `scripts/generate-pack-manifest.mjs`, `scripts/compare-pack-manifest.mjs` |
| Missing package boundary control | Missing `files` allowlist warning/fail | Enforce allowlist for sensitive packages | `package-audit.config.json`, strict presets |
| Manual review skipped | CI workflow checks on PR/push | Required checks before merge/release | `.github/workflows/package-audit.yml` |
| Slow/unclear incident response | Runbook + incident template | Time-boxed containment and communication | `docs/release-incident-runbook.md`, issue templates |
