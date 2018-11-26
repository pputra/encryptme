import React, { Component } from 'react';

const Button = ({fn,label,attribute = "btn btn-primary"}) => {

    return (
            <button type="submit" className={attribute} onClick={()=> fn()}>{label}</button>
    )
};

export default Button;
