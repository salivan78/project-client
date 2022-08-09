import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import lc from "./ListsCertificate.module.css";
import ListCertificate from "./ListCertificate";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../../../../../redux/qualityCertificateList-reducer";
import {setLists} from "../../../../../../action/list";
import Paginator from "../../../../../utils/Paginator";

let ListsCertificate = () => {

    const limit = useSelector(state => state.listsCertificatePage.limit)
    const page = useSelector(state => state.listsCertificatePage.page)
    const docs = useSelector(state => state.listsCertificatePage.docs)
    const dispatch = useDispatch()

    function onPageChange(pageNumber) {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setLists(pageNumber, limit))
    }

    useEffect(() => {
        dispatch(setLists(page, limit))
    }, [page, limit])

    return <div>
        <div>
            <NavLink to='/fdp/listsCertificates/newList'>
                <button className={lc.green}>Добавить акт</button>
            </NavLink>
        </div>
        <div className={lc.l}>
            <Paginator onPageChange={onPageChange}/>
            <hr/>
            <div>
                {docs.map(list =>
                    <ListCertificate key={list.name} list={list}/>)}
            </div>
        </div>
    </div>
}

export default ListsCertificate