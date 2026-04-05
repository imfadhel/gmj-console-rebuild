FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Sesuaikan port dengan yang digunakan di backend Anda
EXPOSE 5000

CMD node src/initDb.js && node server.js