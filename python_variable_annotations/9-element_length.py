#!/usr/bin/env python3

"""
Import data type annotations to return iterable
"""

from typing import Tuple, Iterable, List, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
