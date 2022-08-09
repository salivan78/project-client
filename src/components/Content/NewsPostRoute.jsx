import {Route, Switch} from "react-router-dom";
import React from "react";
import NewsPost from "./NewsPost";
import NewPost from "./NewPost";

const NewsPostRoute = () => {

    return (
        <div>
            <Switch>
                <Route exact path='/news/NewPost' render={() => <NewPost/>}/>
                <Route exact path='/news/:_id?' render={() => <NewsPost/>}/>
            </Switch>
        </div>
    )
}

export default NewsPostRoute;