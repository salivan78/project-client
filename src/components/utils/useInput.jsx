import {useEffect, useState} from "react";

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    /*useEffect(() => {
        setValue(value);
    }, [value])*/

    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}