import React from 'react';
import CardFront from './CardFront.js';
//import CardBack from './CardBack.js';


class Card extends React.Component {
    
    render() {
        console.log("This is the card component")
        return(
            <div className="card__container">
                <div className="card__body">
                    <CardFront />

                
                    
                
                </div>
            </div>
        )
    }
}

export default Card;