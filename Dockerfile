#!/bin/bash
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV TZ="Bangkok/Thailand"

COPY . .

CMD ["npm", "start"]