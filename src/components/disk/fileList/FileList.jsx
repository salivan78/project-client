import React from 'react';
import f from "./fileList.module.css"
import d from "../Disk.module.css"
import {useSelector} from "react-redux";
import File from "./file/File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const FileList = () => {

    const files = useSelector(state => state.files.files)
    const fileView = useSelector(state => state.files.view)

    if (files.length === 0) {
        return (
            <div className={d.loader}>Файлы не найдены</div>
        )
    }

    if (fileView === 'plate') {
        return (
            <div className={f.fileplate}>
                {files.map(file => <File key={file._id} file={file}/>)}
            </div>
        )
    }

    if (fileView === 'list') {
        return (
            <div className={f.filelist}>
                <div className={f.filelist_header}>
                    <div className={f.filelist_name}>Название</div>
                    <div className={f.filelist_date}>Дата</div>
                    <div className={f.filelist_size}>Размер</div>
                </div>
                <TransitionGroup>
                    {files.map(file =>
                        <CSSTransition key={file._id}
                                       timeout={500}
                                       classNames={f.file}
                                       exit={false}
                        >
                            <File file={file}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        );
    }
};

export default FileList;