import c from "./Content.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import PostPaginator from "./PostPaginator";

const Content = () => {

    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <div className={c.content}>
            {isAuth &&
            <div>
                <NavLink to={'/news/NewPost'}>
                    <button className={c.blue}>Добавить новость</button>
                </NavLink>
            </div>
            }
            <div>
                <PostPaginator/>
            </div>
        </div>
    )
}

export default Content;