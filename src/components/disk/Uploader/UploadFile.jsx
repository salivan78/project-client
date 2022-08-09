import React from 'react';
import u from './Uploader.module.css'
import {useDispatch} from "react-redux";
import {removeUploadFile} from "../../../redux/uploadReducer";

const UploadFile = ({file}) => {
    const dispatch = useDispatch()
    return (
        <div className={u.upload_file}>
            <div className={u.upload_file_header}>
                <div className={u.upload_file_name}>{file.name}</div>
                <button className={u.upload_file_remove} onClick={() => dispatch(removeUploadFile(file.id))}>x</button>
            </div>
            <div className={u.upload_file_progress_bar}>
                <div className={u.upload_file_upload_bar} style={{width: file.progress + "%"}}/>
                <div className={u.upload_file_percent}>{file.progress}%</div>
            </div>
        </div>
    );
};

export default UploadFile;