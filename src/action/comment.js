import axios from "axios";
import {API_URL} from "../config";
import {addComment, setComment} from "../redux/performChart-reducer";

// export function getComment(id, year) {
//     return async dispatch => {
//         try {
//             const response = await axios.get(`${API_URL}api/performance/comment?id=${id}&year=${year}`)
//             dispatch(setComments(response.data))
//         } catch (e) {
//             alert(e.response.data.message)
//         }
//     }
// }

export function getCurrentComment(id, year, month) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/performance/comment/current?id=${id}&year=${year}&month=${month}`)
            dispatch(setComment(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function updateComment(id, comment) {
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}api/performance/comment?id=${id}`, {
                comment
            })
            dispatch(setComment(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}