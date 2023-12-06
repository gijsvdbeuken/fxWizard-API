FROM node:20

WORKDIR /fxWizard-API-v2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]