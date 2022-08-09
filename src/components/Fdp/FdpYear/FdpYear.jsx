import fy from './FdpYear.module.css'
import FdpMountRoute from "./FdpMount/FdpMountRoute";
import FullYear from "./FullYear";
import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";

const FdpYear = (props) => {

    let initialState = {
        calendar: {
            mounts: [
                {idMount: 1, mount: 'Январь', mountNumber: '01'},
                {idMount: 2, mount: 'Февраль', mountNumber: '02'},
                {idMount: 3, mount: 'Март', mountNumber: '03'},
                {idMount: 4, mount: 'Апрель', mountNumber: '04'},
                {idMount: 5, mount: 'Май', mountNumber: '05'},
                {idMount: 6, mount: 'Июнь', mountNumber: '06'},
                {idMount: 7, mount: 'Июль', mountNumber: '07'},
                {idMount: 8, mount: 'Август', mountNumber: '08'},
                {idMount: 9, mount: 'Сентябрь', mountNumber: '09'},
                {idMount: 10, mount: 'Октябрь', mountNumber: '10'},
                {idMount: 11, mount: 'Ноябрь', mountNumber: '11'},
                {idMount: 12, mount: 'Декабрь', mountNumber: '12'},
            ],

            years: [
                {yearId: 2021},
                {yearId: 2022},
                {yearId: 2023},
            ],
        },
    }

    return <div className={fy.fdp}>
        <div>
            <Switch>
                <Route exact path='/fdp/summary' render={() => <FullYear
                    state={initialState}
                />}/>
                <Route path='/fdp/summary/:yearId' render={() => <FdpMountRoute
                    state={initialState}
                />}/>
                {/*Нужно сделать проверку на некорректный год и месяц*/}
                <Redirect to="/"/>
            </Switch>
        </div>
    </div>
}

export default FdpYear;