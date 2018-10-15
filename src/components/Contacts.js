import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Vinay",
          email: "vinay@gmail.com",
          phone: "222-333-4444"
        },
        {
          id: 2,
          name: "Krishna",
          email: "kish@gmail.com",
          phone: "211-333-4444"
        },
        {
          id: 3,
          name: "John",
          email: "jfk@gmail.com",
          phone: "222-666-4444"
        },
        {
          id: 4,
          name: "Carl",
          email: "carlh@gmail.com",
          phone: "111-333-4444"
        }
      ]
    };
  }

  deleteItem = id => {
    const { contacts } = this.state;
    const contactFiltered = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: contactFiltered
    });
  };

  render() {
    const { contacts } = this.state;
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
  }
}

export default Contacts;
