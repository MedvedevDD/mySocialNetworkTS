import {ActionTypes} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

type LocationType = {
    country: string,
    cityName: string
}
export type UserType = {
    id: number,
    photos: {
        small: string,
        large: string
    },
    followed: boolean
    name: string,
    status: string,
    location: LocationType
}
export type UsersStateType = {
    users: Array<UserType>
}
const initialState: UsersStateType = {
    users: []
}
/*let users = [
    {id: new Date().getTime(), photoUrl: "", fullName: "Dmitry", status: "I'm the BOSS", location: {country: "Russia", cityName: "Belgorod"}},
    {id: new Date().getTime(), photoUrl: "", fullName: "Tatiana", status: "I'm the BOSS", location: {country: "Russia", cityName: "Belgorod"}},
    {id: new Date().getTime(), photoUrl: "", fullName: "Veronik", status: "I'm the BOSS", location: {country: "Russia", cityName: "Belgorod"}},
]*/
const usersReducer = (state: UsersStateType = initialState, action: ActionTypes): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            //return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}

        default:
            return state
    }

}
export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export default usersReducer;