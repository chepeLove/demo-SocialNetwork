
const SEND_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your react?'},
        {id: 3, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Natasha'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
             return {
                ...state,
                messages: [...state.messages,{id: 4, message: body}],
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,newMessageBody
})


export default dialogsReducer
