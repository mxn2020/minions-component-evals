"""
Minions Component-evals SDK — Type Schemas
Custom MinionType schemas for Minions Component-evals.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

component_benchmark_type = MinionType(
    id="component-evals-component-benchmark",
    name="Component benchmark",
    slug="component-benchmark",
    description="A benchmark definition for a pipeline component.",
    icon="⚡",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="componentType", type="select", label="componentType"),
        FieldDefinition(name="targetId", type="string", label="targetId"),
        FieldDefinition(name="datasetId", type="string", label="datasetId"),
        FieldDefinition(name="metrics", type="string", label="metrics"),
        FieldDefinition(name="threshold", type="number", label="threshold"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

benchmark_result_type = MinionType(
    id="component-evals-benchmark-result",
    name="Benchmark result",
    slug="benchmark-result",
    description="A result from running a component benchmark.",
    icon="📈",
    schema=[
        FieldDefinition(name="benchmarkId", type="string", label="benchmarkId"),
        FieldDefinition(name="score", type="number", label="score"),
        FieldDefinition(name="metricBreakdown", type="string", label="metricBreakdown"),
        FieldDefinition(name="isPassing", type="boolean", label="isPassing"),
        FieldDefinition(name="runAt", type="string", label="runAt"),
        FieldDefinition(name="promptVersionRef", type="string", label="promptVersionRef"),
    ],
)

custom_types: list[MinionType] = [
    component_benchmark_type,
    benchmark_result_type,
]

