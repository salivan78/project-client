import fmi from '../FdpMount.module.css'
import {NavLink} from "react-router-dom";

const FdpMountItem = (props) => {

    return (
        <div className={fmi.item}>
            <NavLink to={'/fdp/summary/2021/' + props.mountNumber} activeClassName={fmi.activeLink}>{props.mount}</NavLink>
        </div>
    )
}

export default FdpMountItem;