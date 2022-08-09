import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/news-reducer";
import {getNews} from "../../action/news";
import Post from "./Post";
import PaginatorNews from "../utils/PaginatorNews";
import PostDefault from "./PostDefault";

const PostPaginator = () => {

    const dispatch = useDispatch()
    const limit = useSelector(state => state.news.limit)
    const page = useSelector(state => state.news.page)
    const news = useSelector(state => state.news.news)

    function onPageChange(pageNumber) {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getNews(pageNumber, limit))
    }

    useEffect(() => {
        dispatch(getNews(page, limit))
    }, [page, limit])
    //}, [news, page, limit])

    if(news.length === 0) {

        return (
            <PostDefault/>
        )
    }

    return (
        <div>
            <div>
                {news.map(posts =>
                    <Post key={posts._id} posts={posts}/>)}
            </div>
            <PaginatorNews onPageChange={onPageChange}/>
        </div>)
}

export default PostPaginator;