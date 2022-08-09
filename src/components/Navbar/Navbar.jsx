import logoLink from "../../images/khv_logo_fdp_link.png";
import p from "../../images/khv_logo_performance_link.png"
import pack from "../../images/khv_log_puck_link.png"
import nav from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <div className={nav.navbar}>
            <ul className={nav.topmenu}>
                <li className={nav.link}>
                    <NavLink to="/homepage" activeClassName={nav.activeLink}>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/performance" activeClassName={nav.activeLink}><img src={p}/></NavLink>
                </li>
                <li className={nav.dropdown}>
                    <p className={nav.dropp}><img src={logoLink}/></p>
                    <ul className={nav.submenu}>
                        <NavLink to="/fdp/summary">Свод по ФДП</NavLink>
                        {isAuth &&
                        <NavLink to="/fdp/listsCertificates">Акты качества</NavLink>
                        }
                        <NavLink to="/fdp/losses">Потери</NavLink>
                        {/*<NavLink to="/fdp/dataTable">Свод данных</NavLink>*/}
                    </ul>
                </li>
                <li>
                    <p className={nav.dropp}><img src={pack}/></p>
                    {/*<NavLink to="/packing" activeClassName={nav.activeLink}>Упаковка</NavLink>*/}
                    <ul className={nav.submenu}>
                        <NavLink to="">ОУ</NavLink>
                        <NavLink to="">ОДП(ПФ)</NavLink>
                        <NavLink to="">ОПФ</NavLink>
                        <NavLink to="">ОХП</NavLink>
                        <NavLink to="">ОКП</NavLink>
                        <NavLink to="">ОТП</NavLink>
                    </ul>
                </li>
                <li className={nav.link}>
                    <NavLink to="/library" activeClassName={nav.activeLink}>Книги</NavLink>
                </li>
                {isAuth &&
                <li className={nav.link}>
                    <NavLink to="/reservation" activeClassName={nav.activeLink}>Резервирование</NavLink>
                </li>
                }
                {isAuth &&
                <li className={nav.link}>
                    <NavLink to="/promo" activeClassName={nav.activeLink}>Акции</NavLink>
                </li>
                }
                {isAuth &&
                <li className={nav.link}>
                    <NavLink to="/mernCloud" activeClassName={nav.activeLink}>"Облако"</NavLink>
                </li>
                }
            </ul>
        </div>
    )
}

export default Navbar;