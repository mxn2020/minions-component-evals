---
title: Quick Start
description: Get up and running with Minions Component-evals in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-component-evals/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_component_evals import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
component-evals info
```
