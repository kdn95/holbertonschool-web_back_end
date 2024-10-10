#!/usr/bin/env python3
"""
return num * multi with type annotations
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns function that multiplies"""
    def multiply_em(num: float) -> float:
        return num * multiplier
    return multiply_em
