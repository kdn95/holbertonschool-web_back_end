#!/usr/bin/env python3
""" Py function returns school with specific topic """


def schools_by_topic(mongo_collection, topic: str):
    # retrieve all documents from collection
    entire_data = mongo_collection.find()
    # empty list
    the_school = []
    # loop over all keys in collection
    for key in entire_data:
        # if key is named topics
        if 'topics' in key:
            # if the args topic is the value of key topics
            if topic in key['topics']:
                # add into new list
                the_school.append(key)

    return the_school
