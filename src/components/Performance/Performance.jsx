import React from "react";
import PerformDepartment from "./PerformanceDepartment";
import {Redirect, Route, Switch} from "react-router-dom";
import WorkerHours from "./WorkerHours";
import PerformanceChartAll from "./PerformanceChartAll";
import PerformanceChartUSO from "./PerformanceChartUSO";
import PerformChart from "./PerformanceChart";

const Perform = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/performance' render={() => <PerformDepartment/>}/>
                <Route exact path='/performance/worker' render={() => <WorkerHours/>}/>
                {/*<Route exact path='/performance/all' render={() => <PerformanceChartAll/>}/>*/}
                {/*<Route exact path='/performance/uso' render={() => <PerformanceChartUSO/>}/>*/}
                <Route path='/performance/:name' render={() => <PerformChart/>}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default Perform;