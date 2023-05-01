import {ActionTypes} from "./redux-store";
import {loginDataType, usersApi} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET_USER_DATA"
const DEL_USER_DATA = "DEL_USER_DATA"

export type AuthStateType = {
    id: number | null,
    login: string,
    email: string,
    isAutherized?: boolean
}
const initialState: AuthStateType = {
    id: null,
    login: "",
    email: "",
    isAutherized: false
}

const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAutherized: true
            };
        case DEL_USER_DATA:
            return {
                ...state,
                id: null,
                login: "",
                email: "",
                isAutherized: false
            }
        default:
            return state
    }

}
export const loginTC = (formData: loginDataType) => (dispatch: Dispatch) => {
    usersApi.login(formData)
        .then(response => {
            if (response.data.resultCode === 0) {
                usersApi.getMyAuthData()
                    .then(response => {
                        if (response.resultCode === 0) {
                            let {id, login, email} = response.data
                            dispatch(setUserData({id, login, email}))
                        }
                    })
            }
        })
}
export const logOutTC = () => (dispatch: Dispatch) => {
    usersApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(delUserLoginData())}})

}
export const setUserData = ({id, login, email}: AuthStateType) => ({
    type: SET_USER_DATA, data: {id, login, email}
} as const)
export const delUserLoginData = () => ({type: DEL_USER_DATA} as const)

export const getMyAuthDataThunkCreator = () => (dispatch: Dispatch) => {
    usersApi.getMyAuthData()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setUserData({id, login, email}))
            }
        })

}

export default authReducer;