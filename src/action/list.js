import axios from "axios";
import {API_URL} from "../config";
import {
    addoff,
    addon,
    setQualityList,
    setTotalCount,
    toggleAddingProgress
} from "../redux/qualityCertificateList-reducer";
import {listsAPI} from "./api";
import {hideLoader, showLoader} from "../redux/appReducer";
import {addList, setList} from "../redux/list-reducer";

export function updateList(id, nameProduct, weight, location, incongruity, reason, usage, department, sum, article, nameGuilty, correction, nameCorrection, monthfdp) {
    return async dispatch => {
        try {
            dispatch(toggleAddingProgress(true, id))
            const response = await axios.put(`${API_URL}api/lists?id=${id}`, {
                nameProduct,
                weight,
                location,
                incongruity,
                reason,
                usage,
                department,
                sum,
                article,
                nameGuilty,
                correction,
                nameCorrection,
                monthfdp
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setList(response.data))
            dispatch(toggleAddingProgress(false, id))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function createList(name, date, nameProduct, weight, location, incongruity, reason, usage, department, sum, article, nameGuilty, correction, nameCorrection) {
    return async dispatch => {
        try {
            dispatch(toggleAddingProgress(true))
            const response = await axios.post(`${API_URL}api/lists`, {
                name,
                date,
                nameProduct,
                weight,
                location,
                incongruity,
                reason,
                usage,
                department,
                sum,
                article,
                nameGuilty,
                correction,
                nameCorrection
            },
                {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            }
            )
            dispatch(addList(response.data))
            alert(`Лист с номером ${name} добавлен`)
            dispatch(toggleAddingProgress(false))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

const addedList = async (dispatch, id, added, actionCreator) => {

    try {
        dispatch(toggleAddingProgress(true, id))
        const response = await axios.put(`${API_URL}api/lists?id=${id}`, {
            added
        }, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        dispatch(actionCreator(response.data))
        dispatch(toggleAddingProgress(false, id))
    } catch (e) {
        alert(e.response.data.message)
    }
}

export function createAddon(id, added) {
    return async (dispatch) => {
        addedList(dispatch, id, added, addon)
    }
}

export function removeAdded(id, added) {
    return async (dispatch) => {
        addedList(dispatch, id, added, addoff)
    }
}

export const setLists = (page, limit) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            listsAPI.getLists(page, limit).then(response => {
                dispatch(setQualityList(response.data.docs))
                dispatch(setTotalCount(response.data.totalDocs))
            })
            dispatch(hideLoader())
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const setOneLists = (numberList) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            listsAPI.getOneList(numberList).then(response => {
                dispatch(setList(response.data))
                //console.log(response.data)
            })
        } catch (e) {
            alert(e.response.data.message)
        } finally {
            dispatch(hideLoader())
        }
    }
}