import React from "react";
import Input from "./Input";

const OnButton = (props) => {

    return (
        <button name={props.name} onClick={() => props.setValue(true)} className={props.className}><img src={props.children.props.src}
                                                                                      title={props.children.props.title}/>
        </button>
    )
}

export default OnButton