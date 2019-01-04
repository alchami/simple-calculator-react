import React, {Component} from "react";
import ReactDOM from "react-dom";
import Button from "./Button.jsx";

class ButtonsContainer extends Component {
    constructor() {
        super();
    }

    render() {
        const test = () => console.log("pressed!");
        return(
            <div id="calculator-buttons">
                <Button label="0" command={test}/>
            </div>
        )
    }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<ButtonsContainer/>, wrapper) : false;

export default ButtonsContainer;