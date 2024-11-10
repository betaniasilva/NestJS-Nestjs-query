FROM node:16.13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --force 

COPY . .

CMD ["npm", "run", "start:dev"]