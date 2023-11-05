FROM node:20

WORKDIR /fxWizard-API

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
