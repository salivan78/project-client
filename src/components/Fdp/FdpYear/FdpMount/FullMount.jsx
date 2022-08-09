import f from './FdpMount.module.css'
import fmi from "./FdpMount.module.css";
import {useRouteMatch} from "react-router";
import {NavLink} from "react-router-dom";

const FullMount = (props) => {

    let {url} = useRouteMatch();

    return (
        <div className={f.fdp}>
            {props.state.calendar.mounts.map((m) => (
                <li key={m.id}>
                    <NavLink to={`${url}/${m.mountNumber}`}
                             activeClassName={fmi.activeLink}>{m.mount}</NavLink>
                </li>
            ))}
        </div>
    )
}

export default FullMount;