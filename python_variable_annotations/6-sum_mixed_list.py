#!/usr/bin/env python3
"""
Write a type-annotated function
sum_mixed_list which takes a list mxd_lst
of integers and floats and returns their sum as a float
"""

from typing import Union, List
# include Union to include more than 1 type of data in list
def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    return float(sum(mxd_lst))
