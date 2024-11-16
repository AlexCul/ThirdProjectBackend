from node:23-alpine3.19

workdir /home

run mkdir /home/app
copy . /home/app

workdir /home/app

run npm install express graphql-http graphql ruru --save

