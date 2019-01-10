FROM node:11.6.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 1337