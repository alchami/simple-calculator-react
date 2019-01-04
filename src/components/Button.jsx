import React, {Component} from "react";
import PropTypes from "prop-types";

// Should stay stateless
/*class Button extends Component {
    render() {
        const label   = this.props.label;
        const command = this.props.command;

        return(<button id={label} className="btn btn-dark" onClick={() => command(label)}>{label}</button>)
    }
}*/

const Button = ({label, command}) => (
    <button id={label} className="btn btn-dark" onClick={() => command(label)}>{label}</button>
);
Button.propTypes = {
    label: PropTypes.string.isRequired,
    command: PropTypes.func.isRequired
};

export default Button;