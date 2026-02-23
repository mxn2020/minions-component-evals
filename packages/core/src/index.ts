/**
 * Minions Component-evals SDK
 *
 * Pipeline-level benchmarks for RAG, routing, and classification
 *
 * @module @minions-component-evals/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Component-evals.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
