import React from 'react';

class Button extends React.Component {
    render() {
        console.log('This is the button');
        return(
            <form>
                <button className={this.props.ClassName} type={this.props.type} value={this.props.value}></button>
            </form>
        )
    }

}

export default Button;