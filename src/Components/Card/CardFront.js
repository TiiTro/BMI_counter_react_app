/* react component for the front side of the card */

import React from 'react';
import Input from '../Inputs/Input.js';
import Button from '../Inputs/Button.js';
import countBMI from '../Actions/CountBMI.js';

class CardFront extends React.Component {
    render() {
        console.log("This is the front side");
        return(
            <div className='card__side-front'>
                <h1 className="heading__big">Count your BMI</h1>
                <Input className="input" name="inputWeight" id="inputWeight" type="number" placeholder="How much do you weight (in kg)?"/>
                <Input className="input" name="inputHeight" id="inputHeight" type="number" placeholder="How tall are you (in cm)?"/>
                <Button className="btn" id="btn_count" type="submit" onClick={countBMI}/>
            </div>

            
        )
    }
}

export default CardFront;