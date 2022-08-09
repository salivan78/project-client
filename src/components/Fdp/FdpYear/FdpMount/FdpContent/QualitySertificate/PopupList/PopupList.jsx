import React, {useState} from 'react';
import p from './PopupList.module.css'
import Input from "../../../../../../utils/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../../../../../../redux/fileReducer";
import {setQualityListAC} from "../../../../../../../redux/qualityCertificateList-reducer";
import {NavLink} from "react-router-dom";

const PopupList = () => {

    const [listNumber, setListNumber] = useState(10)
    const [listDate, setListDate] = useState('')
    const [nameProduct, setNameProduct] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentList = useSelector(state => state.listsCertificatePage.lists)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(setQualityListAC(currentList, listNumber))
    }

    return (
        <div className={p.popup} onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className={p.popup_content} onClick={(event => event.stopPropagation())}>
                <div className={p.popup_header}>
                    <div className={p.popup_title}>Создать новый акт</div>
                    <button className={p.popup_close} onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <Input type='number' placeholder='№ акта...' value={listNumber} setValue={setListNumber}/>
                <Input type='date' placeholder='Дата акта...' value={listDate} setValue={setListDate}/>
                <Input type='text' placeholder='Наименование продукции...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='number' placeholder='Количество...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='Место обнаружения...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='Вид несоответствия...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='Причина...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='Направление продукции...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='Ответственное отделение...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='number' placeholder='Сумма ущерба, руб...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='Статья списания...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='ФИО ответственного за брак...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='Корректирующие мероприятия...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='text' placeholder='Ответственный за выполнение корректирующих мероприятий...' value={nameProduct} setValue={setNameProduct}/>
                <Input type='month' placeholder='Добавить в месяц...' value={nameProduct} setValue={setNameProduct}/>
                <NavLink to='/fdp/listsCertificates/newList'>
                <button className={p.popup_create} onClick={() => createHandler()}>Создать</button>
                </NavLink>
            </div>
        </div>
    );
};

export default PopupList;