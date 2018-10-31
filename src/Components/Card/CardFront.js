/* react component for the front side of the card */

import React from 'react';
import Input from '../Inputs/Input.js';
import Button from '../Inputs/Button.js';
// import countBMI from '../Actions/CountBMI.js';

class CardFront extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
        this.handleHeight = this.handleHeight.bind(this);
        
        this.state= {
          weight: '',
          height: '',
          bmi: '',
          bmiClass: ''
        }
      }
    
      handleHeight(event) {
        console.log(event.target.value);
        this.setState({
          height: event.target.value
        });
      }
    
      handleWeight(event) {
        console.log(event.target.value);
        this.setState({
          weight: event.target.value
        });
      }
    
      calculateBmi = () => {
        let bmi = (this.state.weight / (this.state.height * this.state.height) * 10000).toFixed(3);
        this.setState({
          bmi: bmi,
          bmiClass: this.BmiClass(bmi)
        });
        console.log(bmi)
      }
    
      BmiClass = (bmi) => {
        if(bmi < 15) {
          return(
            console.log('You are dangerously underweight')
          )
        } if (bmi >= 15 && bmi < 17) {
          return(
            console.log('You are considerably underweight')
          )
        } if (bmi >= 17 && bmi < 18.5) {
          return(
            console.log('You are slightly underweight')
          )
        } if (bmi >= 18.5 && bmi < 25) {
          return(
            console.log('You are normalweight')
          )
        } if (bmi >= 25 && bmi < 30) {
          return(
            console.log('You are slightly overweight')
          )
        } if (bmi >= 30 && bmi < 35) {
          return(
            console.log('You are considerably overweight')
          )
        } if (bmi >= 35 && bmi < 40) {
          return(
            console.log('You are dangerously overweight')
          )
        } if (bmi > 40) {
          return(
            console.log('You are very dangerously overweight')
          )
        }
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log('Submit done');
        this.setState({
          weight: event.target.value,
          height: event.target.value
        })
        this.calculateBmi();
        console.log(this.state.weight);
        console.log(this.state.height);
      }
    

    render() {
        console.log("This is the front side");
        return(
            <div className='card__side-front'>
                <form onSubmit={this.handleSubmit}> 
                    <h1 className="heading__big">Count your BMI</h1>
                    <Input className='input' type='number' name="weight" onChange={this.handleWeight} placeholder="How much do you weight (in kg)?"/>
                    <br></br>
                    <Input className='input' type='number' name="height" onChange={this.handleHeight} placeholder="How tall are you (in cm)?"/>
                    <br></br>
                    <Button className="btn btn__text" type="submit" value="Count"/>
                </form>
            </div>
            
        )
    }
}

export default CardFront;