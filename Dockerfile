FROM node:16-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn", "start:dev"]