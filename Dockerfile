FROM node:14-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT=3000

RUN npm run build

CMD npm run serve

EXPOSE 3000