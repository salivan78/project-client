import FdpMountTable from "./FdpMountTable";
import DataForTable from "./FdpContent/Table/DataForTable";
import AssistInfo from "./FdpContent/Table/AssistInfo";
import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const FdpMountTableRoute = (props) => {

    const isAuth = useSelector(state => state.user.isAuth)
    console.log(props);

    return (
        <div>
            <Switch>
                <Route exact path='/fdp/summary/:yearId/:idMount'
                       render={() => <FdpMountTable state={props.state}/>}/>
                {isAuth &&
                    <Route path='/fdp/summary/:yearId/:idMount/dataTable'
                        render={() => <DataForTable state={props.state}/>}/>
                }
                <Route path='/fdp/summary/:yearId/:idMount/assist' render={() => <AssistInfo state={props.state}/>}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default FdpMountTableRoute;