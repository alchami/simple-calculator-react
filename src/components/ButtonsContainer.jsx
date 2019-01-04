import React, {Component} from "react";
import ReactDOM from "react-dom";
import Button from "./Button.jsx";

class ButtonsContainer extends Component {
    constructor() {
        super();
    }
    
    createButtons (command) {
        let buttons = []

        for (let i = 0; i < 10; i++) {
            buttons.push(
                <div id="calculator-buttons">
                 <Button label={i} command={command}/>
                </div>
            ) 
        }

        return buttons;
    } 

    render() {
        const test = (label) => console.log(label, " pressed!");
        return(
            this.createButtons(test)
        )
    }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<ButtonsContainer/>, wrapper) : false;

export default ButtonsContainer;