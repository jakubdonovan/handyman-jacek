// Why is this showing as a compliation error when barreling?
// src/server.ts:1:28 - error TS2306:
// File 'C:/Users/User/projects/ci/1/handyman-jacek/node_modules/@handyman/common/src/index.ts'
// is not a module.
import { PRODUCTION } from "@handyman/common/src/constants/PRODUCTION";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import graphqlSchema from "./schema";

export default async function startServer() {
  const app = express();

  await mongoose
    .connect(`mongodb://${PRODUCTION ? "mongo" : "localhost"}:27017/handyman`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .catch((err) => console.log(err));

  const server = new ApolloServer({ schema: graphqlSchema });
  server.applyMiddleware({ app });

  app.use(express.static("../client/build"));

  app.listen(process.env.PORT || 8080, () => {
    console.log("Started Server");
  });
}
