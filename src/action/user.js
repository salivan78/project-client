import axios from "axios";
import {setUser, setUserRole} from "../redux/userReducer";
import {API_URL} from "../config";
import {stopSubmit} from "redux-form";

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login = (email, password, rememberMe) => {

    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {
                email,
                password,
                rememberMe
            })
            //console.log(response.data)
            dispatch(setUser(response.data.user))
            dispatch(setUserRole(response.data.user.role))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            console.log(e)
            alert(e.response.data.message)
            dispatch(stopSubmit())
        }
    }
}

export const auth = () => {

    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            dispatch(setUserRole(response.data.user.role))
            //console.log(response.data.user.role)
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            //alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar = (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${API_URL}api/files/avatar`, formData,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteAvatar = () => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/avatar`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}