import React, { Component } from 'react';
import './App.scss';
import './index.scss';
import Card from './Components/Card/Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;

/* 
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      weight: '',
      height: '',
      bmi: '',
      bmiClass: ''
    }
  }

  handleClick() {
    console.log('Click happened');
  }

  handleWeight(event) {
    console.log(event.target.value);
    this.setState({
      weight: event.target.value
    },
    this.setBmi);
  }

  handleHeight(event) {
    console.log(event.target.value);
    this.setState({
      height: event.target.value
    },
    this.setBmi);
  }

  setBmi = () => {
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



  render() {
    return (
      <div>
        <form className="App"> 
          <input type='number' name="weight" onChange={this.handleWeight.bind(this)}></input>
          <br></br>
          <input type='number' name="height" onChange={this.handleHeight.bind(this)}></input>
          <br></br>
          
          <button onClick={this.handleClick.bind(this)} style={{color: 'white'}}>count</button>
        </form>
        <p>{this.state.weight}</p>
        <p>{this.state.height}</p>
        <p>{this.state.bmi}</p>
        <p>{this.state.bmiClass}</p>
        
      </div>

      

    );
  }
}

/*
export class Input extends Component {
  render() {
    return(
      <input type={this.props.type}></input>
    )
  }
}
*/
/*
export class Submit extends Component {
  render() {
    return(
      <button onClick={this.handleClick} style={{color: 'white'}}>count</button>
    )
  }
}
*/