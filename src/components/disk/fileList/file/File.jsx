import React from 'react';
import f from "./File.module.css"
import dirlogo from "../../../../assets/dirlogo.png"
import filelogo from "../../../../assets/filelogo.png"
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../redux/fileReducer";
import {deleteFile, downloadFile} from "../../../../action/file";
import sizeFormat from "../../../utils/sizeFormat";

const File = ({file}) => {

    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)

    function openDirHandler(file) {
        if (file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(file)
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFile(file))
    }

    if (fileView === 'list') {
        return (
            <div className={f.file_row} onClick={() => openDirHandler(file)}>
                <img src={file.type === 'dir' ? dirlogo : filelogo} alt=""/>
                <div className={f.file_name}>{file.name}</div>
                <div className={f.file_date}>{file.date.slice(0, 10)}</div>
                <div className={f.file_size}>{sizeFormat(file.size)}</div>
                {file.type !== 'dir' &&
                <button className={f.file_download} onClick={(e) => downloadClickHandler(e)}>download</button>}
                <button className={f.file_delete} onClick={(e) => deleteClickHandler(e)}>delete</button>
            </div>
        );
    }
    if (fileView === 'plate') {
        return (
            <div className={f.file_row_plate} onClick={() => openDirHandler(file)}>
                <img src={file.type === 'dir' ? dirlogo : filelogo} alt=""/>
                <div className={f.file_name_plate}>{file.name}</div>
                <div className={f.file_btns_plate}>
                    {file.type !== 'dir' &&
                    <button className={f.file_download_plate}
                            onClick={(e) => downloadClickHandler(e)}>download</button>}
                    <button className={f.file_delete_plate} onClick={(e) => deleteClickHandler(e)}>delete</button>
                </div>
            </div>
        );
    }
};

export default File;