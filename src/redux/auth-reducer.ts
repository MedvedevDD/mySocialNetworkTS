import {ActionTypes} from "./redux-store";
import {authApi, loginDataType, userProfileApi} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET_USER_DATA"

export type AuthStateType = {
    id: number | null,
    login: string,
    email: string,
    isAuth?: boolean
}
const initialState: AuthStateType = {
    id: null,
    login: "",
    email: "",
    isAuth: false
}

const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state
    }

}
export const loginTC = (formData: loginDataType) => (dispatch: Dispatch) => {
    authApi.login(formData)
        .then(response => {
            if (response.data.resultCode === 0) {
                // @ts-ignore
                dispatch(getMyAuthDataThunkCreator())
                // authApi.getMyAuthData()
                //     .then(response => {
                //         if (response.resultCode === 0) {
                //             let {id, login, email} = response.data
                //             dispatch(setUserData({id, login, email}))
                //         }
                //     })
            }
        })
}
export const setUserData = ({id, login, email, isAuth}: AuthStateType) => ({
    type: SET_USER_DATA, payload: {id, login, email, isAuth: isAuth}
} as const)
export const logOutTC = () => (dispatch: Dispatch) => {
    authApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                //dispatch(delUserLoginData())}})
                dispatch(setUserData({id: null, login: '', email: '', isAuth:false}))}})
}


export const getMyAuthDataThunkCreator = () => (dispatch: Dispatch) => {
    authApi.getMyAuthData()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setUserData({id, login, email, isAuth:true}))
            }
        })

}

export default authReducer;