import React from 'react';
import load from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={load.lds_roller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;