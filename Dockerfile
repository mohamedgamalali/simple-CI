FROM node:16.3.0-alpine
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm i
RUN npm install -g nodemon
COPY . .
EXPOSE 3000
# CMD [ "npm", "run", "dev"]
