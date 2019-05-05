import React from 'react';
import '../../styles/snippets/_input.scss';

export default function Input(props) {
    return(
        <div>
            <input 
                className={props.className} 
                type={props.type} 
                name={props.name}
                value={props.value} 
                onChange={props.onChange} 
                placeholder={props.placeholder}
                required
            />
        </div>
    )
}