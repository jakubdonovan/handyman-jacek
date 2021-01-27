FROM node:14-alpine
WORKDIR /app

# Get Dependencies and create a symlink to common
COPY yarn.lock .
COPY package.json .
COPY lerna.json .

# Install dependencies
WORKDIR /app/packages/common
COPY packages/common/package.json .

WORKDIR /app/packages/client
COPY packages/client/package.json .

WORKDIR /app/packages/server
COPY packages/server/package.json .

WORKDIR /app
RUN yarn --non-interactive --immutable 

# Add symlink
WORKDIR /app/packages/common
RUN yarn link

WORKDIR /app/packages/client
RUN yarn link "@handyman/common"

WORKDIR /app/packages/server
RUN yarn link "@handyman/common"

# Add packages
WORKDIR /app/packages/client
ADD packages/client . 

WORKDIR /app/packages/server
ADD packages/server .  

WORKDIR /app/packages/common
ADD /packages/common/ .

# Setup env vars for production
WORKDIR /app
RUN yarn build
EXPOSE 5000

WORKDIR /app/packages/server
CMD ["node", "./dist/index.js"]