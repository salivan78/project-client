import f from './FdpMount.module.css'
import FullMount from "./FullMount";
import FdpMountTableRoute from "./FdpMountTableRoute";
import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";

const FdpMountRoute = (props) => {

    return (
        <div className={f.fdp}>
            <Switch>
                <Route exact path='/fdp/summary/:yearId' render={() => <FullMount
                    state={props.state}
                />}/>
                <Route path='/fdp/summary/:yearId/:idMount'
                       render={() => <FdpMountTableRoute
                           state={props.state}
                       />}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default FdpMountRoute;