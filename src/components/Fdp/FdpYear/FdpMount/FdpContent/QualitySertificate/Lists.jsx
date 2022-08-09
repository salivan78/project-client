import React from "react";
import {useSelector} from "react-redux";
import Loader from "../../../../../utils/Loader";
import d from "../../../../../disk/Disk.module.css";
import ListsCertificate from "./ListsCertitficate";

const Lists = () => {

    const loader = useSelector(state => state.listsCertificatePage.loader)

    if (loader) {
        return (
            <div className={d.loader}>
                <Loader/>
            </div>
        )
    }

    return <>
        <ListsCertificate/>
    </>
}

export default Lists