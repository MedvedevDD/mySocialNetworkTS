import {ActionTypes} from "./redux-store";

const ADD_POST = "ADD-POST"
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE"

export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

const initialState: ProfilePageType = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hello", likeCounts: 10},
        {id: 2, message: "How are you", likeCounts: 15}
    ] as Array<PostType>
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
        default:
            return state
    }
}
export const addPostAC = () => ({type: ADD_POST} as const)
export const newPostTextChangeAC = (newText: string) => ({type: NEW_POST_TEXT_CHANGE, newText: newText} as const)

export default profileReducer