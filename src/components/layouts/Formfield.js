import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function Formfield({ name, label, type, placeholder, value, onChange, error }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        className={classnames("form-control", { "is-invalid": error })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}

Formfield.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

Formfield.defaultProps = {
  type: "text"
};

export default Formfield;
