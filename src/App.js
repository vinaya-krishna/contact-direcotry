import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./context";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // four : wrap the app with the Provider

      //Surround with BrowserRouter
      //Surround inside container with Switch
      //All routes will go inside
      <Provider>
        <Router>
          <div className="App">
            <Header brand="Contact-Directory" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
