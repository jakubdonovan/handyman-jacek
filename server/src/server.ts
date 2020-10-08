import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import graphqlSchema from "./schema";

export default async function startServer() {
  const app = express();

  await mongoose
    .connect("mongodb://mongo:27017/handyman", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .catch((err) => console.log(err));

  const server = new ApolloServer({ schema: graphqlSchema });
  server.applyMiddleware({ app });

  app.use(express.static("../client/build"));

  app.listen(8080, () => {
    console.log("Started Server");
  });
}
