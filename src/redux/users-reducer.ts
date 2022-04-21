import {ActionTypes} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_AMOUNT_OF_USERS = "SET_AMOUNT_OF_USERS"
const SET_FIRST_PAGE_OF_PAGINATION = "SET_FIRST_PAGE_OF_PAGINATION"
const SET_USERS_PER_PAGE = "SET_USERS_PER_PAGE"
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"

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
    users: Array<UserType>,
    amountOfUsers: number,
    currentPage: number,
    usersPerPage: number,
    firstPageOfPagination: number,
    isLoading: boolean
}
const initialState: UsersStateType = {
    users: [],
    amountOfUsers: 0,
    currentPage: 1,
    usersPerPage: 10,
    firstPageOfPagination: 1,
    isLoading: false
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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_AMOUNT_OF_USERS:
            return {...state, amountOfUsers: action.allUsersAmount}
        case SET_FIRST_PAGE_OF_PAGINATION:
            return {...state, firstPageOfPagination: action.firstPaginationPage}
        case SET_USERS_PER_PAGE:
            return {...state, usersPerPage: action.numberOfUsersPerPage}
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }

}
export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setAmountOfUsersAC = (allUsersAmount: number) => ({type: SET_AMOUNT_OF_USERS, allUsersAmount} as const)
export const setFirstPageOfPeginationAC = (firstPaginationPage: number) => ({
    type: SET_FIRST_PAGE_OF_PAGINATION, firstPaginationPage
} as const)
export const setUsersPerPageAC = (numberOfUsersPerPage: number) => ({
    type: SET_USERS_PER_PAGE, numberOfUsersPerPage
} as const)
export const toggleIsLoadingAC = (isLoading: boolean) => ({type: TOGGLE_IS_LOADING, isLoading} as const)
export default usersReducer;