FROM node

WORKDIR /adminpannel

COPY package*.json /admin/

RUN npm install

COPY . /admin/

EXPOSE 5000

CMD [ "npm", "start"]