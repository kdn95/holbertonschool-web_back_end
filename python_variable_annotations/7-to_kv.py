#!/usr/bin/env python3
"""
return float including type annotations
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Output is stuffed into a list"""
    return k, float(v**2)
