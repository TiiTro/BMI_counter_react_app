import React from 'react';
import '../Card/_card.scss';
import './_input.scss';

class Input extends React.Component {
    render() {
        return(
            <div>
                <input className={this.props.className} type={this.props.type} name={this.props.name} onChange={this.props.handleChange} placeholder={this.props.placeholder} required />
            </div>
        )
    } 
}

export default Input;