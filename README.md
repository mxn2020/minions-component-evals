![CI](https://github.com/mxn2020/minions-component-evals-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-component-evals

**Pipeline-level benchmarks for RAG, routing, and classification**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-component-evals/sdk minions-sdk

# Python
pip install minions-component-evals

# CLI (global)
npm install -g @minions-component-evals/cli
```

---

## CLI

```bash
# Show help
component-evals --help
```

---

## Python SDK

```python
from minions_component_evals import create_client

client = create_client()
```

---

## Project Structure

```
minions-component-evals/
  packages/
    core/           # TypeScript core library (@minions-component-evals/sdk on npm)
    python/         # Python SDK (minions-component-evals on PyPI)
    cli/            # CLI tool (@minions-component-evals/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [component-evals.minions.help](https://component-evals.minions.help)
- Blog: [component-evals.minions.blog](https://component-evals.minions.blog)
- App: [component-evals.minions.wtf](https://component-evals.minions.wtf)

---

## License

[MIT](LICENSE)
