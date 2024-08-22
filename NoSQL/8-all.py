#!/usr/bin/env python3
""" list all docs """
from pymongo import MongoClient


def list_all(mongo_collection) -> list:
    """ Py function listing all documents in collection """
    listing = []

    # da_client = MongoClient("mongodb://127.0.0.1:27017")
    # da_db = da_client["my_db"]
    # da_collection = da_db["school"]
    # return empty list if no docs in collection
    # if mongo_collection is None:
        # return []
    # loop in collection for all docs using find()
    # find() returns all occurrence in collection
    for x in mongo_collection.find():
        listing.append(x)

    return listing
