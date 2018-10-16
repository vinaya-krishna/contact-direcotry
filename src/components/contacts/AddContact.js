import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div class="card-header">Add Contact</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={name}
              />
            </div>
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
              />
            </div>
            <div class="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                value={phone}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
