FROM node:14-alpine

WORKDIR /app
COPY package.json .
RUN yarn

WORKDIR /app/packages/common
COPY packages/common/package.json .
RUN yarn
COPY packages/common . 

WORKDIR /app/packages/client
COPY packages/client/package.json .
RUN yarn
COPY packages/client . 
RUN yarn build

WORKDIR /app/packages/server
COPY packages/server/package.json .
RUN yarn
COPY packages/server . 
RUN yarn build

EXPOSE 5000
CMD ["node", "./dist/index.js"]