#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict

index_range = __import__('0-simple_helper_function').index_range
# get_hyper = __import__('2-hypermedia_pagination').get_hyper



class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
            """ return dataset based on index and page_size """

            # with open(self.DATA_FILE) as f:
            #     reader = csv.reader(f)
            #     indexed_data = list(reader)
# 
            indexed_data = self.indexed_dataset()

            assert isinstance(index, int) and index >= 0 and index < len(indexed_data)

            nxt_index = index + page_size

            spec_data = []
            i = 0
            # loop new list to see if smaller than page_size
            while len(spec_data) < page_size:
                # move to next page closer to page_size til end of page/last index of page
                the_index = index + i
                # add each index found in dataset into new list
                if the_index in indexed_data:
                    spec_data.append(indexed_data[the_index])
                # increment within loop
                i = i + 1
            
            a_dict = {
                 "index": index,
                 "next_index": nxt_index,
                 "page_size": page_size,
                 "data": spec_data
            }

            return a_dict
