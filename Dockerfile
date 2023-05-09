FROM node:16

ARG NEXT_PUBLIC_KEY
ENV NEXT_PUBLIC_KEY=${NEXT_PUBLIC_KEY}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]