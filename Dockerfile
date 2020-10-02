FROM node:alpine

WORKDIR /app/client

COPY package.json /app/client/

RUN cd /app/client && npm install --silent

COPY . /app/client

EXPOSE 3000

CMD [ "npm","start" ]