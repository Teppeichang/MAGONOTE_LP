FROM node:lts-buster-slim

WORKDIR /usr/src/app

RUN npm install -g npm@latest && npm install create-next-app