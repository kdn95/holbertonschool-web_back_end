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
        with open(self.DATA_FILE) as f:
            reader = csv.reader(f)
            the_data = list(reader)
        # page_info is based on start & end index within the dataset
        page_info = the_data[start_ind:end_ind]

        if start_ind > len(the_data):
            return []

        return page_info
