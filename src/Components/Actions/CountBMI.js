

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