/* react component for the front side of the card */

import React from 'react';
import Input from '../Inputs/Input.js';
import Button from '../Inputs/Button.js';

class CardFront extends React.Component {
    render() {
        console.log("This is the front side");
        return(
            <div>
                <h1 className="heading__big">Count your BMI</h1>
                <Input name="inputWeight" id="inputWeight" type="number" placeholder="How much do you weight (in kg)?"/>
                <Input name="inputHeight" id="inputHeight" type="number" placeholder="How tall are you (in cm)?"/>
                <Button name="btn_count" id="btn_count" type="submit"/>
            </div>

            
        )
    }
}

export default CardFront;