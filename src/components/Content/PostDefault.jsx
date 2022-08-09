import p from "./Post.module.css"
import React from "react";
import imgDefault from "../../images/wood-miaso-kolbasa-bekon-sous-spetsii-khleb-narezka-assorti.jpg"
import moment from "moment";
import 'moment/locale/ru'

const PostDefault = () => {

    const dateNow = moment().format("DD MMM YYYY H:mm")

    return (
        <div className={p.post_item}>
            <div className={p.image}>
                <img src={imgDefault}/>
            </div>
            <div className={p.post_date}>
                {dateNow}
            </div>
            <div className={p.info}>
                <h2>ЗАГОЛОВОК</h2>
                <div className={p.info_text}>
                    <p>Здесь должен быть текст...</p>
                </div>
                <div className={p.button_wrap}>
                    <p>Здесь должна быть ссылка...</p>
                </div>
            </div>
        </div>)
}

export default PostDefault;