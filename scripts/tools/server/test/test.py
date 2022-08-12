import importlib.util
from os.path import dirname, join, abspath

def module_from_file(module_name, file_path):
    spec = importlib.util.spec_from_file_location(module_name, file_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module

main = module_from_file("main", abspath(join(dirname(__file__), "..", "implementations", "py", "main.py")))

import base64

main.bench(lambda: base64.b64decode("SGVsbG8sIFdvcmxkIQ==".encode('ascii')))
main.output()