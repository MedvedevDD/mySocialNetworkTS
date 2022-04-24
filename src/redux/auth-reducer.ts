import {ActionTypes} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA"


export type AuthStateType = {
    id: number,
    login: string,
    email: string,
    isAutherized?: boolean
}
const initialState: any = {
    id: null,
    login: null,
    email: null,
    isAutherized: false

}


const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAutherized: true
            }


        default:
            return state
    }

}
export const setUserData = ({id, login, email}: AuthStateType) => ({
    type: SET_USER_DATA, data: {id, login, email}
} as const)

export default authReducer;