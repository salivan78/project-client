import logo from "../../images/km_and_khv_logo.png";
import h from './Header.module.css'
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/userReducer";
import {API_URL} from "../../config";
import avatarLogo from "../../assets/avatarDefault.png";

const Header = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

    const history = useHistory()

    function logoutHandler() {
        history.push('/homepage')
        dispatch(logout())
    }

    return <header className={h.header}>
        <div className={h.header_logo}>
            <div className={h.logo}>
                <a href={'https://kalina-malina.ru'}><img src={logo}/></a>
            </div>
            <div className={h.headerText}>
                ВОЗМОЖНОСТИ
            </div>
            <div className={h.header_login}>
                {!isAuth &&
                <div>
                    <div className={h.bluelink}>
                        <NavLink to="/registration" activeClassName={h.activeLink}>Регистрация</NavLink>
                    </div>
                    <div className={h.bluelink}>
                        <NavLink to="/login" activeClassName={h.activeLink}>Войти</NavLink>
                    </div>
                </div>
                }
                {isAuth &&
                <div className={h.avatar_name}>
                    <div className={h.bluelink_logout} onClick={logoutHandler}>Выход</div>
                    {currentUser.email}
                    <NavLink to="/profile"><img src={avatar}/></NavLink>
                </div>
                }
            </div>
        </div>
    </header>
}

export default Header;