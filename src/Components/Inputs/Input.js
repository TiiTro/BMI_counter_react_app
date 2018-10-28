import React from 'react';
import '../Card/_card.scss';
import './_input.scss';

class Input extends React.Component {
    render() {
        return(
            <form>
                <input className={this.props.className} type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required />
            </form>
        )
    } 
}

export default Input;