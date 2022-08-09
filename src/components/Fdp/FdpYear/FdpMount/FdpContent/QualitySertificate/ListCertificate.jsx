import React from "react";
import lc from "./ListCertificate.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createAddon, removeAdded} from "../../../../../../action/list";
import moment from "moment";

const ListCertificate = ({list}) => {

    const dispatch = useDispatch()
    const addingInProgress = useSelector(state => state.listsCertificatePage.addingInProgress)
    const monthFdp = moment(list.monthfdp, 'YYYY-MM-DD').format('MMMM YYYY')
    const dateList = moment(list.date, 'YYYY-MM-DD').format('DD MMMM YYYY')

    function addonHandler() {
        dispatch(createAddon(list._id, true))
    }

    function addoffHandler() {
        dispatch(removeAdded(list._id, false))
    }

    return (
        <div className={lc.list}>
                {/*<span>*/}
                {/*    <div>ЧТО-ТО ТУТ БУДЕТ</div>*/}
                {/*</span>*/}
            <span>
                    <div>№ акта</div>
                </span>
            <div className={lc.link}>
                <NavLink className={lc.nbr_link} to={`/certificateList/` + list.name}>{list.name}</NavLink>
            </div>
            <span>
                    <div>Дата акта</div>
                </span>
            <div>{dateList}</div>
            <span>
                    <div>Наименование продукции</div>
                </span>
            <div>{list.nameProduct}</div>
            <span>
                    <div>Количество, кг</div>
                </span>
            <div>{list.weight} кг</div>
            <span>
                    <div>Ответственное отделение</div>
                </span>
            <div>{list.department}</div>
            <span>
                    <div>Сумма ущерба, руб</div>
                </span>
            <div>{list.sum} руб</div>
            <span>
                    <div>Статья списания</div>
                </span>
            <div>{list.article}</div>
            <span>
                    <div>ФИО ответственного за брак</div>
                </span>
            <div>{list.nameGuilty}</div>
            <span>
                    <div>Ответственный за выполнение корректирующих мероприятий</div>
                </span>
            <div>{list.nameCorrection}</div>
            <span>
                    <div>Отразить в месяц</div>
                </span>
            <div>{monthFdp}</div>
            <div>
                {list.added
                    ? <button className={lc.adding_btn_add} disabled={addingInProgress.some(id => id === list._id)}
                              onClick={() => addoffHandler()}>Убрать</button>
                    : <button className={lc.adding_btn_remove} disabled={addingInProgress.some(id => id === list._id)}
                              onClick={() => addonHandler()}>Добавить</button>}
            </div>
            <hr/>
        </div>
    )
}

export default ListCertificate;