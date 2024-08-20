#!/usr/bin/env python3
import csv
import math
from typing import List

index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ return paginated dataset """
        # use assert to check if page & page_size is int and > 0
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        # extract start and end index from index range funct
        start_ind, end_ind = index_range(page, page_size)
        # grab the entire dataset
        the_data = self.dataset()
        # page_info is based on start & end index within the dataset
        page_info = the_data[start_ind:end_ind]

        if start_ind > len(the_data):
            return []
        
        return page_info

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        the_data = self.dataset()
        
        nxt_page = page + 1
        if nxt_page > (len(the_data) - 1):
            nxt_page = None
        
        prv_page = page - 1
        if prv_page <= 0:
            prv_page = None

        the_dict = {
            "page_size": page_size,
            "page": page,
            "data": self.get_page(page, page_size),
            "next_page": page + 1,
            "previous_page": page - 1,
            "total_pages": math.ceil((len(the_data) - 1) / page_size)
        }

        return the_dict
