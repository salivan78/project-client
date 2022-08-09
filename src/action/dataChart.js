import axios from "axios";
import {API_URL} from "../config";
import {hideLoader, showLoader} from "../redux/appReducer";
import {
    addChartYear,
    setCurDataChart,
    setDepartment,
    setPrevDataChart, setYearsCharts
} from "../redux/performChart-reducer";

export function createYearPerformChart(name, year) {
    return async dispatch => {
        try {
            //dispatch(toggleAddingProgress(true))
            const response = await axios.post(`${API_URL}api/performance`, {
                name,
                year
            })
            dispatch(addChartYear(response.data.years))
            alert(`Период ${response.data.years.year} добавлен`)
            //dispatch(toggleAddingProgress(false))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const getDepartment = (name, prevYear, curYear) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            // if (name == 'all') {
            //     alert('all')
            // }
            // if(name == 'uso'){
            //     alert('uso')
            // }
            const response = await axios.get(`${API_URL}api/performance/${name}?year=${prevYear}&year=${curYear}`)
            dispatch(setDepartment(response.data.dep.nameRus))
            dispatch(setYearsCharts(response.data.years))
            dispatch(setPrevDataChart(response.data.prev))
            dispatch(setCurDataChart(response.data.cur))
        } catch (e) {
            //alert(e.response.data.message)
            console.log('server error')
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function updatePrevDataChart(id, volJan,
                                    hourJan,
                                    volFeb,
                                    hourFeb,
                                    volMar,
                                    hourMar,
                                    volApr,
                                    hourApr,
                                    volMay,
                                    hourMay,
                                    volJun,
                                    hourJun,
                                    volJul,
                                    hourJul,
                                    volAug,
                                    hourAug,
                                    volSep,
                                    hourSep,
                                    volOct,
                                    hourOct,
                                    volNov,
                                    hourNov,
                                    volDec,
                                    hourDec) {
    return async dispatch => {
        try {
            //dispatch(toggleAddingProgress(true, id))
            const response = await axios.put(`${API_URL}api/performance?id=${id}`, {
                volJan,
                hourJan,
                volFeb,
                hourFeb,
                volMar,
                hourMar,
                volApr,
                hourApr,
                volMay,
                hourMay,
                volJun,
                hourJun,
                volJul,
                hourJul,
                volAug,
                hourAug,
                volSep,
                hourSep,
                volOct,
                hourOct,
                volNov,
                hourNov,
                volDec,
                hourDec
            })
            dispatch(setPrevDataChart(response.data))
            //dispatch(toggleAddingProgress(false, id))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function updateCurDataChart(id, volJan,
                                   hourJan,
                                   volFeb,
                                   hourFeb,
                                   volMar,
                                   hourMar,
                                   volApr,
                                   hourApr,
                                   volMay,
                                   hourMay,
                                   volJun,
                                   hourJun,
                                   volJul,
                                   hourJul,
                                   volAug,
                                   hourAug,
                                   volSep,
                                   hourSep,
                                   volOct,
                                   hourOct,
                                   volNov,
                                   hourNov,
                                   volDec,
                                   hourDec) {
    return async dispatch => {
        try {
            //dispatch(toggleAddingProgress(true, id))
            const response = await axios.put(`${API_URL}api/performance?id=${id}`, {
                volJan,
                hourJan,
                volFeb,
                hourFeb,
                volMar,
                hourMar,
                volApr,
                hourApr,
                volMay,
                hourMay,
                volJun,
                hourJun,
                volJul,
                hourJul,
                volAug,
                hourAug,
                volSep,
                hourSep,
                volOct,
                hourOct,
                volNov,
                hourNov,
                volDec,
                hourDec
            })
            dispatch(setCurDataChart(response.data))
            //dispatch(toggleAddingProgress(false, id))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}