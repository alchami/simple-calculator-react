import React from "react";
import PropTypes from "prop-types";

const Button = ({label, command}) => (
    <button id={label} className="btn btn-dark" onClick={command}>{label}</button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    command: PropTypes.string.isRequired
};

export default Button;