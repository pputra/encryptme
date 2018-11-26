import React, { Component } from 'react';

const Form = ({data}) => {
   
    return (
        <div>
            {data.map((el, i) => (
                <div class="form-group" key={i}>
                    {el.label && <label for="exampleInputEmail1">{el.label}</label>}     
                    <input type={el.type} class="form-control" placeholder={el.placeholder} value={el.value} onChange={(e) => el.fn(e.target.value)}/>
                </div>
            ))}
        </div>
    )
};

export default Form;
