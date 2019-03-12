FROM node:10.14.2-alpine

WORKDIR /src

RUN apk add git

COPY package.json .
RUN npm install
RUN npm install -g truffle@4

COPY . /src
