import React from 'react';
import u from './Uploader.module.css'
import UploadFile from "./UploadFile";
import {useDispatch, useSelector} from "react-redux";
import {hideUploader} from "../../../redux/uploadReducer";

const Uploader = () => {

    //const files = [{id: 1, name: 'file', progress: 60}, {id: 2, name: 'file', progress: 0}]
    const files = useSelector(state => state.upload.files)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()

    return (isVisible &&
        <div className={u.uploader}>
            <div className={u.uploader_header}>
                <div className={u.uploader_title}>Загрузки</div>
                <button className={u.uploader_close} onClick={() => dispatch(hideUploader())}>X</button>
            </div>
            {files.map((file) => <UploadFile key={file.id} file={file}/>)}
        </div>
    );
};

export default Uploader;