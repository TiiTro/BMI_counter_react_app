import React from 'react';
import './_button.scss';

class Button extends React.Component {
    render() {
        console.log('This is the button');
        return(
            <form>
                <button className='btn' type={this.props.type} value={this.props.value}>Count</button>
            </form>
        )
    }

}

export default Button;