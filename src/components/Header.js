import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {brand}
        </Link>
        <ul className="navbar-nav mr-4">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" />
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" />
              Add
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" />
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  brand: "Default App"
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};

export default Header;
