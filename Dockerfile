FROM node:14-alpine

WORKDIR /app

WORKDIR /app/client
COPY client/package.json .
RUN yarn
COPY client . 
RUN yarn build

WORKDIR /app/server
COPY server/package.json .
RUN yarn
COPY server . 
RUN yarn build

EXPOSE 8080
CMD ["node", "dist/index.js"]