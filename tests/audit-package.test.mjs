import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(__filename), "..");
const auditScript = path.join(repoRoot, "scripts", "audit-package.mjs");

function writeJson(filePath, data) {
  writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function runAudit(cwd, args = []) {
  return execFileSync(process.execPath, [auditScript, ...args], {
    cwd,
    encoding: "utf8",
    stdio: "pipe"
  });
}

function makeTempPackage(name) {
  const dir = mkdtempSync(path.join(tmpdir(), `${name}-`));
  return dir;
}

test("passes for simple safe package", () => {
  const dir = makeTempPackage("audit-pass");
  mkdirSync(path.join(dir, "dist"), { recursive: true });
  writeFileSync(path.join(dir, "dist", "index.js"), "export const ok = true;\n", "utf8");
  writeJson(path.join(dir, "package.json"), {
    name: "audit-pass",
    version: "1.0.0",
    license: "MIT",
    files: ["dist/"]
  });

  const output = runAudit(dir);
  assert.match(output, /Package audit passed/);
});

test("fails when source map is included", () => {
  const dir = makeTempPackage("audit-map-fail");
  mkdirSync(path.join(dir, "dist"), { recursive: true });
  writeFileSync(path.join(dir, "dist", "index.js"), "console.log('ok');\n", "utf8");
  writeFileSync(path.join(dir, "dist", "index.js.map"), '{"version":3}\n', "utf8");
  writeJson(path.join(dir, "package.json"), {
    name: "audit-map-fail",
    version: "1.0.0",
    license: "MIT",
    files: ["dist/"]
  });

  assert.throws(
    () => runAudit(dir),
    (error) => {
      const stderr = String(error.stderr || "");
      return /Blocked file extensions detected/.test(stderr);
    }
  );
});

test("fails in strict mode when files allowlist is missing", () => {
  const dir = makeTempPackage("audit-files-strict");
  mkdirSync(path.join(dir, "lib"), { recursive: true });
  writeFileSync(path.join(dir, "lib", "index.js"), "module.exports = 1;\n", "utf8");
  writeJson(path.join(dir, "package.json"), {
    name: "audit-files-strict",
    version: "1.0.0",
    license: "MIT"
  });
  writeJson(path.join(dir, "strict.json"), {
    failOnMissingFilesAllowlist: true
  });

  assert.throws(
    () => runAudit(dir, ["--config=strict.json"]),
    (error) => /No package allowlist found/.test(String(error.stderr || error.message || ""))
  );
});
