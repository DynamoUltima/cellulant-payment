FROM node:17-alpine

WORKDIR /index

COPY . .

RUN npm install

EXPOSE 4000

CMD ["node","index.js"]