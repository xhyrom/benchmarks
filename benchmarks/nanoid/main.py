import importlib.util
from os.path import dirname, join, abspath

def module_from_file(module_name, file_path):
    spec = importlib.util.spec_from_file_location(module_name, file_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module

main = module_from_file("main", abspath(join(dirname(__file__), "..", "..", "scripts", "tools", "server", "implementations", "py", "main.py")))

from nanoid import generate

main.bench(lambda: generate(size=36))
main.output()