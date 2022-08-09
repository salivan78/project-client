const SET_LIST = 'SET_LIST'
const ADD_LIST = 'ADD_LIST'

export type DefaultStateType = {
    doc: any,
    docs: any
}

const defaultState: DefaultStateType = {
    doc: '',
    docs: []
};

export default function listReducer(state = defaultState, action: any): DefaultStateType {
    switch (action.type) {
        case SET_LIST: {
            return {...state, doc: action.doc}
        }
        case ADD_LIST:
            return {...state, docs: [...state.docs, action.payload]}
        default:
            return state;
    }
}

type SetListActionType = {
    type: typeof SET_LIST
    doc: any
}

type AddListActionType = {
    type: typeof ADD_LIST,
    payload: {list: any}
}

export const setList = (doc: any): SetListActionType => ({type: SET_LIST, doc})
export const addList = (list: any): AddListActionType => ({type: ADD_LIST, payload: {list}})