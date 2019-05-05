import React, { useState } from 'react';
import Button from '../snippets/Button';
import Input from '../snippets/Input';
import '../../styles/blocks/_card.scss';


export default function Card(props) {
    const [ weight, setWeight ] = useState('');
    const [ height, setHeight ] = useState('');
    const [ countedBmi, setBmi ] = useState('');
    const [ message, setMessage ] = useState('');

    console.log(weight);
    console.log(height);

    function handleClick(e) {
        e.preventDefault();
        calculateBmi();
    }

    function calculateBmi() {
        var bmi = (weight / (height * height) * 10000).toFixed(0);
        setBmi(bmi);
        console.log('bmi: ', bmi);

        if (bmi < 15) {
            setMessage("You are dangerously underweight");
          } if (bmi >= 15 && bmi < 17) {
            setMessage("You are considerably underweight");
          } if (bmi >= 17 && bmi < 18.5) {
            setMessage("You are slightly underweight");
          } if (bmi >= 18.5 && bmi < 25) {
            setMessage("You are normalweight");
          } if (bmi >= 25 && bmi < 30) {
            setMessage("You are overweight");
          } if (bmi >= 30 && bmi < 35) {
            setMessage("You are obese");
          } if (bmi >= 35 && bmi < 40) {
            setMessage("You are considerably obese");
          } if (bmi > 40) {
            setMessage("You are severely obese");
        }
    }

    console.log(countedBmi);
    console.log(message);
    
    return(
        <div className="card__container">
            <div className="card__body">
                <form> 
                    <h1 className="heading__big">Count your BMI</h1>
                    <Input 
                        className={'input'}
                        type={'number'}
                        name={'weight'}
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        placeholder={"How much do you weight (in kg)?"}
                    />
                     <br />
                    <Input 
                        className={'input'}
                        type={'number'}
                        name={'height'}
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                        placeholder={"How tall are you (in cm)?"}
                    />
                    <br />
                    <Button 
                        className={"btn btn__text"} 
                        value={"Submit"} 
                        onClick={handleClick}
                    />
                </form>
                <div>
                    <p>Your weight is {weight}</p>
                    <p>{height}</p>
                    <p>{countedBmi}</p>
                    <p>{message}</p>
                </div>  
            </div>
        </div>
    );
}