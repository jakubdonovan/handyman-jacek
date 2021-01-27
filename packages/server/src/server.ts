import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import graphqlSchema from "./schema";
import path from "path";
import cors from "cors";

export default async function startServer() {
  console.log(`db url is ${process.env.MONGO_URL}`);
  const PORT = process.env.PORT;
  const app = express();
  const x = path.join(`${__dirname}\\..\\..\\client\\build\\index.html`);
  app.use(cors());

  await mongoose
    .connect(process.env.MONGO_URL || "mongodb://localhost:27017/handyman", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .catch((err) => console.log(err));

  const server = new ApolloServer({ schema: graphqlSchema });
  server.applyMiddleware({ app });

  // Serve HTML File
  app.use(express.static("../client/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(x);
  // });

  app.listen(PORT, () => {
    console.log(`Started Server @ ${PORT}`);
  });
}
