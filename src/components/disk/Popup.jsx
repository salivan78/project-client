import React, {useState} from 'react';
import p from './Popup.module.css'
import Input from "../utils/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../redux/fileReducer";
import {createDir} from "../../action/file";

const Popup = () => {

    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
    }

    return (
        <div className={p.popup} onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className={p.popup_content} onClick={(event => event.stopPropagation())}>
                <div className={p.popup_header}>
                    <div className={p.popup_title}>Создать новую папку</div>
                    <button className={p.popup_close} onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <Input type='text' placeholder='Введите название папки...' value={dirName} setValue={setDirName}/>
                <button className={p.popup_create} onClick={() => createHandler()}>Создать</button>
            </div>
        </div>
    );
};

export default Popup;