import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./Components/App";
import client from "./Apollo/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
