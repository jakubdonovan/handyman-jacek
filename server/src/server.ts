import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

export default async function startServer() {
  const app = express();
  mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
  const schema = {};
  const server = new ApolloServer(schema);
  server.applyMiddleware({ app });
  app.listen(8080, () => {
    console.log("Started Server");
  });
}
