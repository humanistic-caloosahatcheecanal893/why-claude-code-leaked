# Sample Outputs

These examples show what maintainers should expect from the toolkit.

## 1) Passing audit

```text
$ node scripts/audit-package.mjs
Package audit passed (24 files inspected, blocked extensions: .map).
```

## 2) Failing audit (.map file included)

```text
$ node scripts/audit-package.mjs

Blocked file extensions detected:
- dist/index.js.map (121.00 KB)

Package audit failed. Review publish contents before release.
```

## 3) Failing audit (oversized artifact)

```text
$ node scripts/audit-package.mjs --max-bytes=300000

Oversized files detected (>300.00 KB):
- dist/bundle.js (1.42 MB)

Package audit failed. Review publish contents before release.
```

## 4) Manifest drift report

```text
$ node scripts/compare-pack-manifest.mjs
Pack manifest comparison:
- Added files: 2
- Removed files: 0
- Total size delta: 312.00 KB

New files:
- dist/debug.log (190.00 KB)
- dist/index.js.map (122.00 KB)

Manifest comparison failed:
- Total tarball growth 312.00 KB exceeds limit 250.00 KB
```
