import p from "./Post.module.css"
import React from "react";
import imgDefault from "../../images/wood-miaso-kolbasa-bekon-sous-spetsii-khleb-narezka-assorti.jpg"
import {NavLink} from "react-router-dom";
import moment from "moment";
import 'moment/locale/ru'
import {API_URL} from "../../config";

const Post = ({posts}) => {

    const date = moment(posts.date, 'YYYY-MM-DDThh:mm').format("DD MMM YYYY H:mm")
    const newsImage = posts.media ? `${API_URL + posts.media}` : imgDefault

    return (
        <div className={p.post_item}>
            <div className={p.image}>
                <img src={newsImage}/>
            </div>
            <div className={p.post_date}>
                {date}
            </div>
            <div className={p.info}>
                <h2>{posts.heading}</h2>
                <div className={p.info_text}>
                    <p>{posts.text}</p>
                </div>
                <div className={p.button_wrap}>
                    <NavLink className={p.a_btn} to={'/news/' + posts._id}>ПОДРОБНЕЕ</NavLink>
                </div>
            </div>
        </div>)
}

export default Post;