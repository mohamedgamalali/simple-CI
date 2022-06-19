FROM node:16.3.0-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm i
RUN npm install -g nodemon
COPY . .
EXPOSE 3000
RUN chmod -R 777 /root

CMD ["sh", "-c", "npm run dev]