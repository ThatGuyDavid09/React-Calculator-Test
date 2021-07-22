import React from "react";

const Button = (props) => {
    return (
        <input 
            type="button"
            value={props.label} 
            onClick={props.onClick}
            className={props.className}
        />
    );
}

export default Button;