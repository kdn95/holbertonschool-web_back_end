#!/usr/bin/env python3
"""
Write a coroutine called async_generator that takes no arguments.

The coroutine will loop 10 times, each time asynchronously wait 1 second,
then yield a random number between 0 and 10. Use the random module.

"""
import asyncio
from random import random
from typing import Generator, AsyncGenerator


async def async_generator() -> Generator[float, None, None]:
    """ async function loops 10 times & get rando number 0-10"""
    for i in range(10):
        await asyncio.sleep(1)
        yield (i * random())
