FROM node:10

WORKDIR /home/DriadeLdap

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

RUN useradd -ms /bin/bash  nodejs

USER nodejs

EXPOSE 3000

CMD [ "npm", "start" ]