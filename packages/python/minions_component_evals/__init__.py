"""
Minions Component-evals Python SDK

Pipeline-level benchmarks for RAG, routing, and classification
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Component-evals.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
