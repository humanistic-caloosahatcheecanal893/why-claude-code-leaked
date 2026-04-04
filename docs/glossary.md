# Glossary (plain language)

Short definitions for readers who are **not** web developers, plus a column for people who know **ML / data science** but not JavaScript tooling.

| Term | If you know ML / data science | If you are not technical |
|------|------------------------------|-------------------------|
| **LLM** | High-capacity sequence model; “the model” is mostly weights + inference stack | The chat/assistant engine; not the same as “the whole product” |
| **Model weights** | Learned parameters; the main proprietary asset for a lab | The trained “brain”; reports widely agree this was **not** the leaked asset class here |
| **Training data** | Datasets used to fit the model | **Not** what this incident was about in public reporting |
| **System prompt** | Instructions/policies passed at runtime (like a structured system message) | Rules telling the AI how to behave in the product |
| **Agent / coding agent** | Model + tool APIs + loop (plan → act → observe) | An assistant that can use files, terminals, and tools—not just chat |
| **Tool calling** | Function/schema invocation wired to OS/APIs | The product letting the AI run actions (edit files, run commands, …) |
| **Orchestration / harness** | Everything wrapping inference: prompts, tools, retries, permissions | The “app” around the model |
| **npm** | Roughly like **PyPI** for JavaScript | Where many developers download packages; one bad publish reaches many machines |
| **npm package** | Published installable artifact with a manifest | A zip of files you get when you “install” a library or CLI |
| **`package.json`** | Declares name, version, what ships, scripts | The package’s ID card and shipping list |
| **Source map (`.map`)** | Debug map from bundle → sources; can leak structure | A helper that can accidentally expose how private code was built |
| **Packaging mistake** | Wrong files in the release artifact | Shipping the wrong folder to the world—often human/process error |
| **CI (e.g. GitHub Actions)** | Automated checks on every change | Robots that test your project when you push code |
| **Tarball** | Archived package file | The bundle npm publishes/downloads |
| **Supply chain (here)** | Trust and integrity of installs and dependencies | Bad or fake downloads—even if the original company is honest |
| **Hooks / MCP** | Project automation hooks; Model Context Protocol integrations | Ways an AI tool plugs into editors and external services—also abuse surface |

For the incident story in short form, see the [README](../README.md). For packaging controls, see [adopt-in-5-minutes.md](./adopt-in-5-minutes.md).
