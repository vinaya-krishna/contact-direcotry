import React, { Component } from "react";

//first create the context
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_FIELD":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_FIELD":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

//second create Provider component
export default class Provider extends Component {
  state = {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    // third return context Provider
    // value is the data which we want to send to children
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

//five : export the consumer
export const Consumer = Context.Consumer;
