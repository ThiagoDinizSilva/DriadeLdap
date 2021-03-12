FROM node:10

WORKDIR /home/DriadeLdap

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD [ "nodemon", "./src/app","-L" ]