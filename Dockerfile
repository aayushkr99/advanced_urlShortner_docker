FROM node:16

WORKDIR /app
COPY ./package.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]