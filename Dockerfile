FROM node:18-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001
EXPOSE 3002
EXPOSE 3003

CMD ["npm", "run", "start:prod"]
