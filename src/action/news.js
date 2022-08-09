import axios from "axios";
import {hideLoader, showLoader} from "../redux/appReducer";
import {API_URL} from "../config";
import {addNews, deleteNewsAction, setCurrentNews, setNews, setTotalCount} from "../redux/news-reducer";
import {setUser} from "../redux/userReducer";

export function getNews(page, limit) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`${API_URL}api/news?page=${page}&limit=${limit}`)
                dispatch(setNews(response.data.docs))
                dispatch(setTotalCount(response.data.totalDocs))
        } catch (e) {
            //console.log(e.response.data.message)
            console.log('server error')
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function getCurrentNews(id) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`${API_URL}api/news?id=${id}`)
                dispatch(setCurrentNews(response.data))
            //console.log(response.data)
        } catch (e) {
            alert(e.response.data.message)
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function createNews(heading, text) {

    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/news`, {
                heading,
                text
            })
            dispatch(addNews(response.data))
            //console.log(response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function uploadNews(id, heading, text) {
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}api/news?id=${id}`, {
                heading,
                text
            })
            dispatch(setCurrentNews(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function deleteNews(id) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/news?id=${id}`)
            dispatch(deleteNewsAction(id))
            alert(response.data.message)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const uploadNewsImage = (file, id) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${API_URL}api/news/newsImage?id=${id}`, formData)
            dispatch(setCurrentNews(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteNewsImage = (id) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/news/newsImage?id=${id}`)
            dispatch(setCurrentNews(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

// export async function downloadFile(file) {
//     const response = await fetch(`${API_URL}api/files/download?id=${file._id}`, {
//         headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
//     })
//     if (response.status === 200) {
//         const blob = await response.blob()
//         const downloadUrl = window.URL.createObjectURL(blob)
//         const link = document.createElement('a')
//         link.href = downloadUrl
//         link.download = file.name
//         document.body.appendChild(link)
//         link.click()
//         link.remove()
//     }
// }


// export function searchFiles(search) {
//     return async dispatch => {
//         try {
//             const response = await axios.get(`${API_URL}api/files/search?search=${search}`, {
//                 headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
//             })
//             dispatch(setFiles(response.data))
//         } catch (e) {
//             alert(e.response.data.message)
//         } finally {
//             dispatch(hideLoader())
//         }
//     }
// }