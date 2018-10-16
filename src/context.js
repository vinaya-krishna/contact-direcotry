import React, { Component } from "react";
import axios from "axios";
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

    case "UPDATE_FIELD":
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = contact.payload)
              : contact
        )
      };
    default:
      return state;
  }
};

//second create Provider component
export default class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
      this.setState({
        contacts: res.data
      })
    );
  }
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
