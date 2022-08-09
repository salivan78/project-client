import React, {useEffect, useState} from 'react';

const HookInput = (props) => {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    return (
        <input type={props.text} name={props.name} value={value} placeholder={props.placeholder}
               onChange={(e) => setValue(e.target.value)}/>
    );
}

export default HookInput;