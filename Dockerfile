FROM node:alpine
WORKDIR handyman
EXPOSE 8080
COPY . .
CMD yarn deploy