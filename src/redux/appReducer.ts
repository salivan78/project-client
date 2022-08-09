const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'

export type DefaultStateType = {
    loader: boolean
}

const defaultState: DefaultStateType = {
    loader: true
}

export default function appReducer(state = defaultState, action: any): DefaultStateType {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loader: true}
        case HIDE_LOADER:
            return {...state, loader: false}
        default:
            return state
    }
}

type ShowLoaderActionType = {
    type: typeof SHOW_LOADER
}

type HideLoaderActionType = {
    type: typeof HIDE_LOADER
}

export const showLoader = (): ShowLoaderActionType => ({type: SHOW_LOADER})
export const hideLoader = (): HideLoaderActionType => ({type: HIDE_LOADER})