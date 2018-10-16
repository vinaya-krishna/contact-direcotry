import React, { Component } from "react";
import Contact from "./Contact";
//six : import the consumer
import { Consumer } from "../../context";

class Contacts extends Component {
  deleteItem = id => {
    const { contacts } = this.state;
    const contactFiltered = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: contactFiltered
    });
  };

  render() {
    return (
      //wrap the Consumer and its child is always going to be a function, and it receives the all context
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteItem.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
