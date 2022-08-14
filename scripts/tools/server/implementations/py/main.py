import requests
import json
from time import perf_counter_ns as time
from os.path import dirname, join, abspath

BASE_URL = 'http://localhost:3001/bench'

def send(start, end):
    diff = end - start

    requests.post(url = BASE_URL, headers = {'Content-Type': 'application/json'}, json = {'diff': diff})

def output():
    r = requests.get(url = BASE_URL)
    try:
        requests.delete(url = BASE_URL)
    except:
        pass

    with open("scripts/.cache/tmp/tmp.json", "w") as file:
        file.write(json.dumps(r.json()))

def bench(fn):
    i = 100
    while 0 < i:
        t1 = time()

        fn()

        t2 = time()

        send(t1, t2)
        i -= 1