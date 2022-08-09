import React from 'react';
import {NavLink} from 'react-router-dom';
import pd from './PerformanceDepartment.module.css'
import {useSelector} from "react-redux";

const PerformDepartment = () => {

    const role = useSelector(state => state.user.userRole)

    return (
        <div className={pd.link}>
            <div>
                <NavLink to={`/performance/all`}>Общее</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/so`}>СО</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/ou`}>ОУ</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/odp`}>ОДП</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/osfif`}>ОСФиФ</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/oto`}>ОТО</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/okp`}>ОКП</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/ohp`}>ОХП</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/ops`}>ОПС</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/opf`}>ОПФ</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/uso`}>УСО</NavLink>
            </div>
            <div>
                <NavLink to={`/performance/worker`}>Часы</NavLink>
            </div>
            {role == 'admin' &&
            <button>Добавить цех</button>
            }
        </div>
    )
}

export default PerformDepartment;