FROM node:10

WORKDIR /app

ENV NODE_ENV production

ADD ./package-lock.json /app/package-lock.json

ADD ./package.json /app/package.json

RUN npm install --unsafe-perm=true

EXPOSE 3000

ADD . /app

RUN npm run build

CMD npm start