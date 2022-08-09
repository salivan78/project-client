import React from "react";
import {Route, Switch} from "react-router-dom";
import NewList from "./newList";
import Lists from "./Lists";

const ListsCertificateRoute = () => {

    return (
        <div>
            <Switch>
                <Route exact path='/fdp/listsCertificates' render={() => <Lists/>}/>
                <Route exact path='/fdp/listsCertificates/newList' render={() => <NewList/>}/>
            </Switch>
        </div>
    )
}

export default ListsCertificateRoute;