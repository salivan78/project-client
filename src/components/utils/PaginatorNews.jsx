import React, {useState} from "react";
import style from "../utils/Paginator.module.css";
import {useSelector} from "react-redux";
import cn from "classnames";

let PaginatorNews = ({onPageChange, portionSize = 6}) => {

    const limit = useSelector(state => state.news.limit)
    const totalDocs = useSelector(state => state.news.totalDocs)
    const page = useSelector(state => state.news.page)

    let pagesCount = Math.ceil(totalDocs / limit)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        <div className={style.list}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)} }>&#8592;</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <span key={p} className={cn({[style.selectedList]: page === p}, style.list)}
                             onClick={(e) => {
                                 onPageChange(p)
                             }}>{p}</span>
            })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)} }>&#8594;</button>}
        </div>
    </div>
}

export default PaginatorNews