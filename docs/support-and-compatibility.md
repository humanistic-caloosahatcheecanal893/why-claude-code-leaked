# Support and Compatibility

## Runtime Support

- Node.js: 20, 22, 24 (recommended in CI: 24)
- npm: modern versions that support `npm pack --dry-run --json`

## Platform Support

- Linux: supported
- macOS: supported
- Windows: supported (scripts use shell-based npm invocation for compatibility)

## Package Manager Notes

- npm: primary supported path
- pnpm/yarn/bun: supported when package contents are still audited via npm pack

## CI Integration Notes

- GitHub Actions workflow included
- Typical runtime for small/medium packages: a few seconds
- Runtime increases with tarball size and number of included files

## Recommended Integration Points

- prepublish checks (`prepublishOnly`)
- pull request CI checks
- release branch protection checks
