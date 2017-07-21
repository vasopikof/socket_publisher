#!/bin/sh

FROM node

# Create app directory
run ["mkdir", "-p", "/usr/src/app"]
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
run npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]