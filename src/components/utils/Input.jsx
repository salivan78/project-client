import React from 'react';

const Input = (props) => {
    return (
        <input name={props.name} onChange={(event) => props.setValue(event.target.value)} autoFocus={props.autoFocus} defaultValue={props.defaultValue} value={props.value} type={props.type}
               placeholder={props.placeholder}/>
    );
};

export default Input;