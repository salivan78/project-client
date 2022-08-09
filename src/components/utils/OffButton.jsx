import React from "react";

const OffButton = (props) => {

    return (
        <button onClick={props.onClick} onBlur={true} className={props.className}><img src={props.children.props.src}
                                                                                       title={props.children.props.title}/>
        </button>
    )
}

export default OffButton