import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          {brand}
        </a>
        <ul className="navbar-nav mr-4">
          <li className="nav-item active">
            <a href="/" className="nav-link">
              Home
            </a>
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
