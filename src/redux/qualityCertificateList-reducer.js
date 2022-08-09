import {updateObjectInArray} from "../components/utils/object-helpers";

const ADDON = 'ADDON';
const ADDOFF = 'ADDOFF';
const SET_QUALITY_LIST = 'SET_QUALITY_LIST';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const LOADER = 'LOADER'
const TOGGLE_IS_ADDING_PROGRESS = 'TOGGLE_IS_ADDING_PROGRESS'

let defaultState = {
    docs: [],
    totalDocs: 0,
    page: 1,
    limit: 2,
    loader: false,
    addingInProgress: [],
};

const qualityCertificateListReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADDON:
            return {
                ...state,
                docs: updateObjectInArray(state.docs, action.listId._id, '_id', {added: true})
            }

        case ADDOFF:
            return {
                ...state,
                docs: updateObjectInArray(state.docs, action.listId._id, '_id', {added: false})
            }

        case SET_QUALITY_LIST:
            return {...state, docs: action.docs}

        case SET_CURRENT_PAGE:
            return {...state, page: action.page}

        case SET_TOTAL_COUNT:
            return {...state, totalDocs: action.totalDocs}

        case LOADER:
            return {...state, loader: action.loader}

        case TOGGLE_IS_ADDING_PROGRESS:
            return {
                ...state,
                addingInProgress: action.addingInProgress
                    ? [...state.addingInProgress, action.listId]
                    : state.addingInProgress.filter(id => id != action.listId)
            }

        default:
            return state;
    }
}

export const addon = (listId) => ({type: ADDON, listId})
export const addoff = (listId) => ({type: ADDOFF, listId})
export const setQualityList = (docs) => ({type: SET_QUALITY_LIST, docs})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page})
export const setTotalCount = (totalDocs) => ({type: SET_TOTAL_COUNT, totalDocs: totalDocs})
export const setLoader = (loader) => ({type: LOADER, loader})
export const toggleAddingProgress = (addingInProgress, listId) => ({
    type: TOGGLE_IS_ADDING_PROGRESS,
    addingInProgress,
    listId
})

export default qualityCertificateListReducer;