import {ActionTypes} from "./redux-store";

const ADD_POST = "ADD-POST"
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
    profile: UserProfileType | null
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
    profile: null
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
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPostAC = () => ({type: ADD_POST} as const)
export const newPostTextChangeAC = (newText: string) => ({type: NEW_POST_TEXT_CHANGE, newText: newText} as const)
export const setUserProfile = (profile: UserProfileType | null) => ({type: SET_USER_PROFILE, profile} as const)
export default profileReducer