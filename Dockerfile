FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apt-get update && apt-get install -y xdg-utils

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]