import React from 'react';
import '../Card/_card.scss';

class Input extends React.Component {
    render() {
        return(
            <form>
                <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required />
            </form>
        )
    } 
}

export default Input;