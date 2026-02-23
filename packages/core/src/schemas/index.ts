/**
 * @module @minions-component-evals/sdk/schemas
 * Custom MinionType schemas for Minions Component-evals.
 */

import type { MinionType } from 'minions-sdk';

export const componentbenchmarkType: MinionType = {
  id: 'component-evals-component-benchmark',
  name: 'Component benchmark',
  slug: 'component-benchmark',
  description: 'A benchmark definition for a pipeline component.',
  icon: '⚡',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'componentType', type: 'select', label: 'componentType' },
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'datasetId', type: 'string', label: 'datasetId' },
    { name: 'metrics', type: 'string', label: 'metrics' },
    { name: 'threshold', type: 'number', label: 'threshold' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const benchmarkresultType: MinionType = {
  id: 'component-evals-benchmark-result',
  name: 'Benchmark result',
  slug: 'benchmark-result',
  description: 'A result from running a component benchmark.',
  icon: '📈',
  schema: [
    { name: 'benchmarkId', type: 'string', label: 'benchmarkId' },
    { name: 'score', type: 'number', label: 'score' },
    { name: 'metricBreakdown', type: 'string', label: 'metricBreakdown' },
    { name: 'isPassing', type: 'boolean', label: 'isPassing' },
    { name: 'runAt', type: 'string', label: 'runAt' },
    { name: 'promptVersionRef', type: 'string', label: 'promptVersionRef' },
  ],
};

export const customTypes: MinionType[] = [
  componentbenchmarkType,
  benchmarkresultType,
];

