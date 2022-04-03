import {ActionTypes, PostType, ProfilePageType} from "./redux-store";

const ADD_POST = "ADD-POST"
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE"

const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hello", likeCounts: 10},
        {id: 2, message: "How are you", likeCounts: 15}
    ]
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: 0
            }
            if (state.newPostText.length !== 0) {
                state.posts.push(newPost)
                state.newPostText = ""
            }
            return state;
        case NEW_POST_TEXT_CHANGE:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }

}
export const addPostAC = () => ({type: ADD_POST} as const)
export const newPostTextChangeAC = (newText: string) => ({type: NEW_POST_TEXT_CHANGE, newText: newText} as const)

export default profileReducer