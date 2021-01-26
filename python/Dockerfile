FROM python:3.7-buster
COPY src/ /server/
EXPOSE 80

RUN pip3 install \
        requests \
        aiohttp==3.7.2 \
        aiohttp_index

WORKDIR server/
ENTRYPOINT [ "python3", "server.py" ]