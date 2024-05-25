FROM node:20.11

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5003

CMD ["sh", "-c", "npx prisma generate && npm run start:prod"]