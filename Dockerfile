FROM node:latest

WORKDIR /app

COPY . .

ENV PORT=5000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["node", "app.js"]