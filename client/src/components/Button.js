import React from 'react';

const Button = (props) => {
    return <button 
        style={{ width: props.width + "px", height: props.height + "px" }}
        type="button"
        {...props} >
        <span>{props.label}</span>
    </button>
}


export default Button;