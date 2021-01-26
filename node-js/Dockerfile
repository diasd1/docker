FROM node:14.15.4
COPY src/ /server/
EXPOSE 80

RUN npm install \
        formidable@1.2.2 \
        fs@0.0.1-security \
        http@0.0.1-security \
        mv

WORKDIR /server/
ENTRYPOINT [ "node", "server.js" ]