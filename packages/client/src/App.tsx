import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import "./assets/css/main.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { Logo } from "./components/Logo";
// @ts-ignore
import { PRODUCTION } from "@handyman/common";

function App() {
  const client = new ApolloClient({
    uri: PRODUCTION ? "/graphql" : "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Logo />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>

        <div
          style={{ textShadow: "0 0 0 #a0aec0" }}
          className="static bottom-0 left-0 right-0 py-2 text-xs font-normal text-center text-transparent bg-white font-inter"
        >
          Made with <span aria-label="heart emoji">❤</span>️ by{" "}
          <span className="text-blue-500">Jakub</span> in Glenroths.
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
