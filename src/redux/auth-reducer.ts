import {ActionTypes} from "./redux-store";
import {authApi, FormDataType, userProfileApi} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"

export type AuthStateType = {
    id: number | null,
    login: string,
    email: string,
    isAuth?: boolean,
    errorMessage?: string
}
const initialState: AuthStateType = {
    id: null,
    login: "",
    email: "",
    isAuth: false,
    errorMessage: ''
}

const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                // @ts-ignore
                ...action.payload
            };
        default:
            return state
    }

}

export const loginTC = (formData: FormDataType) => (dispatch: Dispatch) => {
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
            } else {
                dispatch(stopSubmit( "login",
                    {_error: response.data.messages.length > 0
                            ? response.data.messages[0] : "Some error"}))
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
                dispatch(setUserData({id: null, login: '', email: '', isAuth: false}))
            }
        })
}


export const getMyAuthDataThunkCreator = () => (dispatch: Dispatch) => {
    authApi.getMyAuthData()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setUserData({id, login, email, isAuth: true}))
            }
        })

}

export default authReducer;