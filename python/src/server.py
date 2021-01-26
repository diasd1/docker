from argparse import ArgumentParser

import asyncio
from aiohttp import web
from aiohttp_index import IndexMiddleware
import requests

argumentParser = ArgumentParser(description="Test Server")
argumentParser.add_argument("--serverPort", required=False,
default=80, help="port of the http server")
arguments = argumentParser.parse_args() # get arguments

def load(request):
    parts = str(request.url).split('/') # split
    sVal = parts[len(parts) - 1]
    print(sVal)
    r = requests.get("http://" + sVal)
    print(r.text)
    return web.Response(text = r.text)

app = web.Application(middlewares=[IndexMiddleware()])
app.router.add_get('/load/{i}', load)
app.router.add_static('/', '.')
asyncio.run ( web._run_app(app, port=arguments.serverPort) )