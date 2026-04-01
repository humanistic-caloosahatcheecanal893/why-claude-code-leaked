# Repo Release Checklist (Dogfooding)

Use this checklist when releasing changes to this toolkit.

- [ ] `npm test` passes
- [ ] `node scripts/audit-package.mjs` passes for relevant package directories
- [ ] `node scripts/generate-pack-manifest.mjs` updated intentionally where applicable
- [ ] `node scripts/compare-pack-manifest.mjs` passes where baseline exists
- [ ] docs updated for behavior/policy changes
- [ ] sample outputs still reflect current script behavior
- [ ] CI workflow remains green on `main`
