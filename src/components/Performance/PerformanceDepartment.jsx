import React from 'react';
import {NavLink} from 'react-router-dom';
import pd from './PerformanceDepartment.module.css'
import {useSelector} from "react-redux";
import {GIT_URL} from "../../config";

const PerformDepartment = () => {

    const role = useSelector(state => state.user.userRole)

    return (
        <div className={pd.link}>
            <div>
                <NavLink to={`${GIT_URL}/performance/all`}>Общее</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/so`}>СО</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/ou`}>ОУ</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/odp`}>ОДП</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/osfif`}>ОСФиФ</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/oto`}>ОТО</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/okp`}>ОКП</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/ohp`}>ОХП</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/ops`}>ОПС</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/opf`}>ОПФ</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/uso`}>УСО</NavLink>
            </div>
            <div>
                <NavLink to={`${GIT_URL}/performance/worker`}>Часы</NavLink>
            </div>
            {role == 'admin' &&
            <button>Добавить цех</button>
            }
        </div>
    )
}

export default PerformDepartment;