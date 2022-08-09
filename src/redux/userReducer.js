const SET_USER = "SET_USER"
const SET_USER_ROLE = "SET_USER_ROLE"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: '',
    userRole: 'admin', // удалить admin
    isAuth: false,
    //isAuth: true,
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
            }
        case SET_USER_ROLE:
            return {
                ...state,
                userRole: action.payload,
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: '',
                userRole: '',
                isAuth: false,
            }

        default:
            return state
    }
}

export const setUser = (user) => ({type: SET_USER, payload: user})
export const setUserRole = (role) => ({type: SET_USER_ROLE, payload: role})
export const logout = () => ({type: LOGOUT})