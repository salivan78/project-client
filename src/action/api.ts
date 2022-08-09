import axios from "axios";
import {API_URL} from "../config";

export const listsAPI = {
    getLists(page: number, limit: number) {
        return axios.get(`${API_URL}api/lists?page=${page}&limit=${limit}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    },
    getOneList(numberList: number) {
        return axios.get(`${API_URL}api/lists/` + numberList, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    }
}