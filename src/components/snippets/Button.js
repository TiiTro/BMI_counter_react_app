import React from 'react';
import '../../styles/snippets/_button.scss';

export default function Button(props) {
    return(
        <div>
            <button 
                className={props.className} 
                type={props.type} 
                onClick={props.onClick}
            >
                {props.value}
            </button>
        </div>
    )
}