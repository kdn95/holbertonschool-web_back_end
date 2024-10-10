#!/usr/bin/env python3
"""Module for pagination task 2"""
import csv
import math
from typing import List, Dict


index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        # Initialize dataset as None so it can be loaded only when required
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        # Check if the dataset is already loaded and cache it for future use
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip header row

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ return paginated dataset """
        # Use assert to check if page & page_size are int and > 0
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Extract start and end index from index_range function
        start_ind, end_ind = index_range(page, page_size)

        # Read the dataset (CSV) and extract relevant
        # data based on start and end indices
        data = []
        with open(self.DATA_FILE) as f:
            reader = csv.reader(f)
            rows = list(reader)

            for i in range(end_ind - start_ind):
                # Skip header row
                wanted_index = start_ind + i + 1
                if wanted_index >= len(rows):
                    # Return empty list if index exceeds available rows
                    return []
                data.append(rows[wanted_index])

        return data

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """Return dict with metadata to create a hyperlink."""
        # Open CSV file and read all rows
        with open(self.DATA_FILE) as f:
            reader = csv.reader(f)
            rows = list(reader)

        # Calculate total pages required based on page size
        total_rows = len(rows) - 1  # Subtract header
        total_pages = math.ceil(total_rows / page_size)

        # Determine the next page number
        next_page = page + 1 if page < total_pages else None

        # Determine the previous page number
        prev_page = page - 1 if page > 1 else None

        # Return the dictionary with pagination metadata
        return {
            'page_size': page_size,
            'page': page,
            'data': self.get_page(page, page_size),
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
