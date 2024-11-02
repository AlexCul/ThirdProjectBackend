from node:23-alpine3.19

workdir /home

copy . /home/app

workdir /home/app

run npm install

cmd ["node", "index.js"]
