import {ActionTypes} from "./redux-store";
import {usersApi} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD-POST"
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_PROFILE_STATUS = "SET_USER_PROFILE_STATUS"

export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type ProfilePageType = {
    newPostText: string
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
    newPostText: "",
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
                message: state.newPostText,
                likeCounts: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case NEW_POST_TEXT_CHANGE:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_PROFILE_STATUS:
            return {...state, profileStatus: action.status}
        default:
            return state
    }
}
export const addPostAC = () => ({type: ADD_POST} as const)
export const newPostTextChangeAC = (newText: string) => ({type: NEW_POST_TEXT_CHANGE, newText: newText} as const)
export const setUserProfileAC = (profile: UserProfileType | null) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserProfileStatusAC = (status: string) => ({type: SET_USER_PROFILE_STATUS, status} as const )
export const getProfileThunkCreator = (uId: number) => {

    return (dispatch: Dispatch) => {
        usersApi.getMyProfileData(uId)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
    }
}

export const getProfileStatusThunkCreator = (uId: number) => (dispatch: Dispatch) => {
    //debugger
    usersApi.getMyProfileStatus(uId)
        .then(res => {
            //debugger
            dispatch(setUserProfileStatusAC(res.statusText))
        })
}

export default profileReducer