import React, { Component } from "react";

class Test extends Component {
  state = {
    name: "",
    email: ""
  };
  componentDidMount() {
    console.log("Mounted");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          name: data.name,
          email: data.email
        })
      );
  }
  render() {
    const { name, email } = this.state;
    return (
      <div>
        <h1>Test Area</h1>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    );
  }
}

export default Test;
