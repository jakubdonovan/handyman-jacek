FROM node:14-alpine

WORKDIR /app

WORKDIR /packages/app/common
COPY packages/common/package.json .
RUN yarn
COPY packages/common . 

WORKDIR /app/packages/client
COPY packages/client/package.json .
RUN yarn
COPY packages/client . 
RUN yarn build

WORKDIR /packages/app/server
COPY packages/server/package.json .
RUN yarn
COPY packages/server . 
RUN yarn build

EXPOSE 8080
CMD ["node", "./dist/index.js"]