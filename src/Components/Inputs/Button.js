import React from 'react';
import './_button.scss';

class Button extends React.Component {
    render() {
        console.log('This is the button');
        return(
            <div>
                <button id={this.props.id} className={this.props.className} type={this.props.type} onClick={this.props.onClick}>{this.props.value}</button>
            </div>
        )
    }

}

export default Button;