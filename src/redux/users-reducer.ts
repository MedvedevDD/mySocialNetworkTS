import {ActionTypes} from "./redux-store";
import {mapDispatchToPropsType} from "../components/Users/UsersContainer";
import {userProfileApi} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_AMOUNT_OF_USERS = "SET_AMOUNT_OF_USERS"
const SET_FIRST_PAGE_OF_PAGINATION = "SET_FIRST_PAGE_OF_PAGINATION"
const SET_USERS_PER_PAGE = "SET_USERS_PER_PAGE"
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS"


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
    isLoading: boolean,
    followingInProgress: number[]

}
const initialState: UsersStateType = {
    users: [],
    amountOfUsers: 0,
    currentPage: 1,
    usersPerPage: 10,
    firstPageOfPagination: 1,
    isLoading: false,
    followingInProgress: []
}

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
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: (action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId))
            }

        default:
            return state
    }

}
export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setAmountOfUsers = (allUsersAmount: number) => ({type: SET_AMOUNT_OF_USERS, allUsersAmount} as const)
export const setFirstPageOfPegination = (firstPaginationPage: number) => ({
    type: SET_FIRST_PAGE_OF_PAGINATION, firstPaginationPage
} as const)
export const setUsersPerPage = (numberOfUsersPerPage: number) => ({
    type: SET_USERS_PER_PAGE, numberOfUsersPerPage
} as const)
export const setToggleIsLoading = (isLoading: boolean) => ({type: TOGGLE_IS_LOADING, isLoading} as const)
export const toggleFollowingProgress = (userId: number, followingInProgress: boolean) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    userId,
    followingInProgress
} as const)

export const getUsersThunkCreator = (usersPerPage: number, currentUsersPage: number) => {
    return (dispatch: any) => {
        dispatch(setToggleIsLoading(true))
        dispatch(setCurrentPage(currentUsersPage))
        userProfileApi.getUsers(usersPerPage, currentUsersPage).then((response) => {
            dispatch(setToggleIsLoading(false))
            dispatch(setUsers(response.items))
            dispatch(setAmountOfUsers(response.totalCount))
        })
    }
}

export const setUsersPerPageThunkCreator = (e: number, currentPage: number) => {
    return (dispatch: any) => {
        dispatch(setToggleIsLoading(true))
        dispatch(setUsersPerPage(e))
        dispatch(setCurrentPage(1))
        dispatch(setFirstPageOfPegination(1))
        userProfileApi.getUsersPerPage(currentPage, e)
            .then(response => {
                dispatch(setToggleIsLoading(false))
                dispatch(setUsers(response.items))
            })
    }

}
export const unfollowBtnThunkCreator = (uId:number) => {
    return (dispatch:any) => {
        dispatch(toggleFollowingProgress(uId, true))
        userProfileApi.unfollowButton(uId)
            .then(response => {
                if (response.data.resultCode === 0) {
                   dispatch(unFollow(uId))
                }
                dispatch(toggleFollowingProgress(uId, false))
            })
    }
}
export const followBtnThunkCreator = (uId:number) => {
    return (dispatch:any) => {
        dispatch(toggleFollowingProgress(uId, true))
        userProfileApi.followButton(uId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(uId))
                }
                dispatch(toggleFollowingProgress(uId, false))
            })
    }
}

export default usersReducer;