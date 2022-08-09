import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFiles, searchFiles, uploadFile} from "../../action/file";
import FileList from "./fileList/FileList";
import d from "./Disk.module.css"
import Popup from "./Popup";
import {setCurrentDir, setFileView, setPopupDisplay} from "../../redux/fileReducer";
import Uploader from "./Uploader/Uploader";
import Loader from "../utils/Loader";
import {showLoader} from "../../redux/appReducer";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const loader = useSelector(state => state.app.loader)
    const dirStack = useSelector(state => state.files.dirStack)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')
    const isAuth = useSelector(state => state.user.isAuth)
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout != false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if (e.target.value != '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value));
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }

    function showCreateDirHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    if (loader) {
        return (
            <div className={d.loader}>
                <Loader/>
            </div>
        )
    }

    return (!dragEnter ?
            <div className={d.but} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler}
                 onDragOver={dragEnterHandler}>
                <div className={d.but_btns}>
                    <button className={d.green} onClick={() => backClickHandler()}>Назад</button>
                    <button className={d.green} onClick={() => showCreateDirHandler()}>Создать папку</button>
                    <div className={d.upload}>
                        <label htmlFor='d.but_upload_input' className={d.but_upload_label}>Загрузить файл</label>
                        <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file"
                               id="d.but_upload_input" className={d.but_upload_input}/>
                    </div>
                    <div>
                        {isAuth &&
                        <input className={d.search} value={searchName} onChange={e => searchChangeHandler(e)}
                               type='text'
                               placeholder='Поиск...'/>}
                    </div>
                    <div className={d.disk_sort}>
                        <select className={d.disk_select}
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}>
                            <option value="name">По имени</option>
                            <option value="type">По типу</option>
                            <option value="date">По дате</option>
                            <option value="size">По размеру</option>
                        </select>
                        <button className={d.disk_plate} onClick={() => dispatch(setFileView('plate'))}/>
                        <button className={d.disk_list} onClick={() => dispatch(setFileView('list'))}/>
                    </div>
                </div>
                <FileList/>
                <Popup/>
                <Uploader/>
            </div>
            :
            <div className={d.drop_area} onDrop={dropHandler} onDragEnter={dragEnterHandler}
                 onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                Перетащите файлы сюда
            </div>
    );
};

export default Disk;