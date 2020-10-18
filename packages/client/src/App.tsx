import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// @ts-ignore
import { PRODUCTION } from "@handyman/common";
import React from "react";
import "./assets/css/main.css";
import { Home } from "./pages/Home";

function App() {
  const client = new ApolloClient({
    uri: PRODUCTION ? "/graphql" : "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
