FROM node:16

ARG NEXT_PUBLIC_KEY
ARG NEXT_PUBLIC_VAR

ENV NEXT_PUBLIC_KEY=${NEXT_PUBLIC_KEY}
ENV NEXT_PUBLIC_VAR=${NEXT_PUBLIC_VAR}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]