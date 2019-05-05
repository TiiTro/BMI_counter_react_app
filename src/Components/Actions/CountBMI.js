

function countBMI() {
    console.log('function BMI running');
    let weight=14;
    let height=140;

    let BMI = weight/(height*height);

    if (BMI < 15) {
        console.log('BMI is less than 15');
        return(BMI);
    } else {
        console.log('BMI is more than 15');
    }
}

export default countBMI;

// setBmi = () => {
//     let bmi = (this.state.weight / (this.state.height * this.state.height) * 10000).toFixed(3);
//     this.setState({
//       bmi: bmi,
//       bmiClass: this.BmiClass(bmi)
//     });
//     console.log(bmi)
//   }

//   BmiClass = (bmi) => {
//     if(bmi < 15) {
//       return(
//         console.log('You are dangerously underweight')
//       )
//     } if (bmi >= 15 && bmi < 17) {
//       return(
//         console.log('You are considerably underweight')
//       )
//     } if (bmi >= 17 && bmi < 18.5) {
//       return(
//         console.log('You are slightly underweight')
//       )
//     } if (bmi >= 18.5 && bmi < 25) {
//       return(
//         console.log('You are normalweight')
//       )
//     } if (bmi >= 25 && bmi < 30) {
//       return(
//         console.log('You are slightly overweight')
//       )
//     } if (bmi >= 30 && bmi < 35) {
//       return(
//         console.log('You are considerably overweight')
//       )
//     } if (bmi >= 35 && bmi < 40) {
//       return(
//         console.log('You are dangerously overweight')
//       )
//     } if (bmi > 40) {
//       return(
//         console.log('You are very dangerously overweight')
//       )
//     }
//   }


