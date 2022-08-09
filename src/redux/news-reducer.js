const GET_NEWS = 'GET_NEWS'
const GET_CURRENT_NEWS = 'GET_CURRENT_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const ADD_NEWS = 'ADD_NEWS'
const DELETE_NEWS = 'DELETE_NEWS'

const defaultState = {
    currentNews: '',
    news: [],
    totalDocs: 1,
    page: 1,
    limit: 6,
};

export default function newsReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_NEWS: {
            return {...state, news: action.payload}
        }
        case GET_CURRENT_NEWS: {
            return {...state, currentNews: action.payload}
        }
        case ADD_NEWS:
            return {...state, news: [...state.news, action.payload]}
        case SET_CURRENT_PAGE:
            return {...state, page: action.page}
        case SET_TOTAL_COUNT:
            return {...state, totalDocs: action.totalDocs}
        case DELETE_NEWS:
            return {...state, news: [...state.news.filter(post => post._id != action.payload)]}
        default:
            return state;
    }
}

export const setNews = (news) => ({type: GET_NEWS, payload: news})
export const setCurrentNews = (currentNews) => ({type: GET_CURRENT_NEWS, payload: currentNews})
export const addNews = (post) => ({type: ADD_NEWS, payload: post})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page})
export const setTotalCount = (totalDocs) => ({type: SET_TOTAL_COUNT, totalDocs: totalDocs})
export const deleteNewsAction = (newsId) => ({type: DELETE_NEWS, payload: newsId})