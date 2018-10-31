// react component for the backside of the card revealing the BMI count result

import React from 'react';



class CardBack extends React.Component {
    render() {
        console.log("This is the back side");

        return(
            <div>
                <p>Your BMI is</p>
                <p></p>
                <p>You are...</p>
            </div>
        )

    }
}

export default CardBack;


