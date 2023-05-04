import {ActionTypes} from "./redux-store";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_PROFILE_STATUS = "SET_USER_PROFILE_STATUS"
//const CHANGE_USER_PROFILE_STATUS = "CHANGE_USER_PROFILE_STATUS"

export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: UserProfileType | null
    profileStatus: string
}

export type UserProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hello", likeCounts: 10},
        {id: 2, message: "How are you", likeCounts: 15}
    ] as Array<PostType>,
    profile: null,
    profileStatus: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.post,
                likeCounts: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_PROFILE_STATUS:
                return {...state, profileStatus: action.status};

        default:
            return state
    }
}
export const addPostAC = (post:string) => ({type: ADD_POST, post} as const)
export const setUserProfileAC = (profile: UserProfileType | null) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserProfileStatusAC = (status: string) => ({type: SET_USER_PROFILE_STATUS, status} as const)
// export const changeUserProfileStatusAC = (status: string) => ({type: CHANGE_USER_PROFILE_STATUS, status} as const)
export const getProfileThunkCreator = (uId: number) => {

    return (dispatch: Dispatch) => {
        profileApi.getMyProfileData(uId)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
            .then(response => {
                profileApi.getMyProfileStatus(uId)
                    .then(res => {
                        // debugger
                        dispatch(setUserProfileStatusAC(res.data))
                    })
            })
    }
}

// export const getProfileStatusThunkCreator = (uId: number) => (dispatch: Dispatch) => {
//     //debugger
//     profileApi.getMyProfileStatus(uId)
//         .then(res => {
//             //debugger
//             dispatch(setUserProfileStatusAC(res.statusText))
//         })
// }
export const changeUserProfileStatusThunkCreator = (status: string) => (dispatch: Dispatch) => {
    profileApi.changeMyProfileStatus(status)
        .then(res => {
            dispatch(setUserProfileStatusAC(status))
        })
}
export default profileReducer