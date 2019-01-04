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
                 <Button key={i.toString()} label={i.toString()} command={command}/>
            ) 
        }

        return buttons;
    } 

    render() {
        const test = (label) => console.log(label, " pressed!");
        return(
            <React.Fragment>
            {this.createButtons(test)}
             <Button label="+" command={test} />
             <Button label="-" command={test} />
             <Button label="CE" command={test} />
            </React.Fragment>
        )
    }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<ButtonsContainer/>, wrapper) : false;

export default ButtonsContainer;