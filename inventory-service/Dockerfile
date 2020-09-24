FROM node:latest
WORKDIR /home/app
COPY . .
ENV PORT=3000
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["npm", "dev"]