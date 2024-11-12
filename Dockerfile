FROM node:16-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --force 

COPY . .

CMD ["npm", "run", "start:dev"]