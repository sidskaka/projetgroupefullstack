FROM node

WORKDIR /back

COPY package*.json /back/

RUN npm install

COPY . /back/

EXPOSE 4000

CMD [ "npm", "start"]