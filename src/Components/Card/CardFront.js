/* react component for the front side of the card */

import React from 'react';
import Input from '../Inputs/Input.js';
import Button from '../Inputs/Button.js';
// import countBMI from '../Actions/CountBMI.js';

class CardFront extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('A weight was submitted ' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log("This is the front side");
        return(
            <form className='card__side-front' onSubmit={this.handleSubmit}>
                <h1 className="heading__big">Count your BMI</h1>
                <Input className="input" type="number" placeholder="How much do you weight (in kg)?" name="inputWeight" id="inputWeight" />
                <Input className="input" name="inputHeight" id="inputHeight" type="number" placeholder="How tall are you (in cm)?"/>
                <Button className="btn" id="btn_count" type="submit" />
            </form>

            
        )
    }
}

export default CardFront;