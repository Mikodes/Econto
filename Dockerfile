FROM node:12

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm install -g typescript

RUN npm run build:ts

RUN npm run build:webpack

CMD ["npm", "run", "prod"]