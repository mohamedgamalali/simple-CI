FROM node:16.3.0-alpine
WORKDIR /usr/app
RUN npm cache clean
COPY package*.json ./
RUN npm i
RUN npm install -g nodemon
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]
