import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, textPost: 'Hi,how are you?', likesCount: 15},
                {id: 2, textPost: "It's my first post", likesCount: 30},
            ],
            newPostText: 'Enter your post'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your react?'},
                {id: 3, message: 'Yo'},
            ],
            dialogs: [
                {id: 1, name: 'Ylya'},
                {id: 2, name: 'Kirill'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Vika'},
                {id: 6, name: 'Natasha'},
            ],
            newMessageBody: ''
        },
        sidebar:{},
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('Change STATE')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)

        this._callSubscriber(this._state)
        }
    }

export default store
window.store = store