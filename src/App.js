import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloCilent";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <div className="container">
              <Route exact={true} path={"/"} component={Home} />
            </div>
            <Route exact={true} path={"/details/:movieId"} component={Detail} />
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}
export default App;
