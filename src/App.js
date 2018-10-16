import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./context";
import AddContact from "./components/contacts/AddContact";

class App extends Component {
  render() {
    return (
      // four : wrap the app with the Provider
      <Provider>
        <div className="App">
          <Header brand="Contact-Directory" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
