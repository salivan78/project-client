const SET_DEPARTMENT = 'SET_DEPARTMENT'
const SET_PREV_DATACHART = 'SET_PREV_DATACHART'
const SET_CUR_DATACHART = 'SET_CUR_DATACHART'
const SET_HOURS_WORKER = 'SET_HOURS_WORKER'
const SET_YEARS_WORKER = 'SET_YEARS_WORKER'
const SET_YEARS_CHARTS = 'SET_YEARS_CHARTS'
const SET_COMMENT = 'SET_COMMENT'
const SET_MONTH_NAME = 'SET_MONTH_NAME'
const ADD_CHART_YEARS = 'ADD_CHART_YEARS'
const ADD_WORKER_HOURS_YEARS = 'ADD_WORKER_HOURS_YEARS'
const ADD_COMMENT = 'ADD_COMMENT'
const TOGGLE_GET_DATA_PROGRESS = 'TOGGLE_GET_DATA_PROGRESS'

const defaultState = {
    //departments: '',
    prevData: {
        volumes: {
            volJan: '',
            volFeb: '',
            volMar: '',
            volApr: '',
            volMay: '',
            volJun: '',
            volJul: '',
            volAug: '',
            volSep: '',
            volOct: '',
            volNov: '',
            volDec: ''
        },
        hours: {
            hourJan: '',
            hourFeb: '',
            hourMar: '',
            hourApr: '',
            hourMay: '',
            hourJun: '',
            hourJul: '',
            hourAug: '',
            hourSep: '',
            hourOct: '',
            hourNov: '',
            hourDec: ''
        }
    },
    curData: {
        volumes: {
            volJan: '',
            volFeb: '',
            volMar: '',
            volApr: '',
            volMay: '',
            volJun: '',
            volJul: '',
            volAug: '',
            volSep: '',
            volOct: '',
            volNov: '',
            volDec: ''
        },
        hours: {
            hourJan: '',
            hourFeb: '',
            hourMar: '',
            hourApr: '',
            hourMay: '',
            hourJun: '',
            hourJul: '',
            hourAug: '',
            hourSep: '',
            hourOct: '',
            hourNov: '',
            hourDec: ''
        }
    },
    hoursWorker: '',
    yearsWorker: [],
    years: [2020, 2021, 2022, 2023],
    getDataProgress: [],
    comment: '',
    month: ''
};

export default function performChartReducerTest(state = defaultState, action) {
    switch (action.type) {
        case SET_DEPARTMENT: {
            return {...state, departments: action.payload}
        }
        case SET_PREV_DATACHART: {
            return {...state, prevData: action.prevData}
        }
        case SET_CUR_DATACHART: {
            return {...state, curData: action.curData}
        }
        case SET_HOURS_WORKER: {
            return {...state, hoursWorker: action.payload}
        }
        case SET_YEARS_WORKER: {
            return {...state, yearsWorker: action.payload}
        }
        case SET_YEARS_CHARTS: {
            return {...state, years: action.payload}
        }
        case SET_COMMENT: {
            return {...state, comment: action.payload}
        }
        case SET_MONTH_NAME: {
            return {...state, month: action.payload}
        }
        case ADD_CHART_YEARS: {
            return {...state, years: [...state.years, action.payload]}
        }
        case ADD_WORKER_HOURS_YEARS: {
            return {...state, yearsWorker: [...state.yearsWorker, action.payload]}
        }
        case ADD_COMMENT: {
            return {...state, comments: [...state.comments, action.payload]}
        }
        case TOGGLE_GET_DATA_PROGRESS:
            return {
                ...state,
                getDataProgress: action.getDataProgress
                    ? [...state.getDataProgress, action.hoursYear]
                    : state.getDataProgress.filter(year => year != action.hoursYear)
            }
        default:
            return state;
    }
}

export const setDepartment = (departments) => ({type: SET_DEPARTMENT, payload: departments})
export const setPrevDataChart = (prevData) => ({type: SET_PREV_DATACHART, prevData})
export const setCurDataChart = (curData) => ({type: SET_CUR_DATACHART, curData})
export const setHoursWorker = (hoursWorker) => ({type: SET_HOURS_WORKER, payload: hoursWorker})
export const setYearsWorker = (yearsWorker) => ({type: SET_YEARS_WORKER, payload: yearsWorker})
export const setYearsCharts = (yearsCharts) => ({type: SET_YEARS_CHARTS, payload: yearsCharts})
export const setComment = (comment) => ({type: SET_COMMENT, payload: comment})
export const addChartYear = (year) => ({type: ADD_CHART_YEARS, payload: year})
export const addWorkerHoursYear = (year) => ({type: ADD_WORKER_HOURS_YEARS, payload: year})
export const toggleGetDataProgress = (getDataProgress, hoursYear) => ({
    type: TOGGLE_GET_DATA_PROGRESS,
    getDataProgress,
    hoursYear
})