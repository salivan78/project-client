import axios from "axios";
import {API_URL} from "../config";
import {hideLoader, showLoader} from "../redux/appReducer";
import {addWorkerHoursYear, setDepartment, setHoursWorker, setYearsWorker} from "../redux/performChart-reducer";

export const getHoursWorker = (year) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            //dispatch(toggleGetDataProgress(true, year))
            const response = await axios.get(`${API_URL}api/performance/worker?year=${year}`)
            dispatch(setHoursWorker(response.data.hours))
            dispatch(setYearsWorker(response.data.years))
            //dispatch(toggleGetDataProgress(false, year))
        } catch (e) {
            alert(`данных по ${year} нет`)
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function createHoursWorker(year) {
    return async dispatch => {
        try {
            //dispatch(toggleAddingProgress(true))
            const response = await axios.post(`${API_URL}api/performance/worker`, {
                year
            })
            dispatch(addWorkerHoursYear(response.data.years))
            alert(`Период ${response.data.years.year} добавлен`)
            //dispatch(toggleAddingProgress(false))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function updateHoursWorker(id,
                                  hoursWorkerJan,
                                  hoursWorkerFeb,
                                  hoursWorkerMar,
                                  hoursWorkerApr,
                                  hoursWorkerMay,
                                  hoursWorkerJun,
                                  hoursWorkerJul,
                                  hoursWorkerAug,
                                  hoursWorkerSep,
                                  hoursWorkerOct,
                                  hoursWorkerNov,
                                  hoursWorkerDec) {
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}api/performance/worker?id=${id}`, {
                hoursWorkerJan,
                hoursWorkerFeb,
                hoursWorkerMar,
                hoursWorkerApr,
                hoursWorkerMay,
                hoursWorkerJun,
                hoursWorkerJul,
                hoursWorkerAug,
                hoursWorkerSep,
                hoursWorkerOct,
                hoursWorkerNov,
                hoursWorkerDec
            })
            dispatch(setHoursWorker(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
