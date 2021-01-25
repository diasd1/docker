from argparse import ArgumentParser

import asyncio
from aiohttp import web
from aiohttp_index import IndexMiddleware

argumentParser = ArgumentParser(description="Test Server")
argumentParser.add_argument("--serverPort", required=False,
default=80, help="port of the http server")
arguments = argumentParser.parse_args() # get arguments

app = web.Application(middlewares=[IndexMiddleware()])
app.router.add_static('/', '.')
asyncio.run ( web._run_app(app, port=arguments.serverPort) )