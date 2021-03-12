import { ADD_TO_TEST, TOGGLE_HAPPY, NEW_CHAT } from './../ChatActions';
// import from dummy data to access chat
import { CHATROOM } from './../../data/dummy-data';

const initialState = {
    happy: false,
    test: ['Hi', 'There'],
    chatrooms: CHATROOM,
    //...
}

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        // Call a new action creator, that you create, when clicking the button. Pass relevant info. in payload.
        // 1: find the right chatroom in the array and copy the chatmessages array.


        case ADD_TO_TEST: 
            console.log("reducer "+ action.payload);
            // Adds the new value to the array, but without making state mutations.
            return {
                ...state,
                test: [...state.test, action.payload]
            }

        case TOGGLE_HAPPY:
            return {
                ...state, 
                happy: !state.happy
            }
 
        case NEW_CHAT:

        const chatroom = state.chatrooms.find(room => room.id === action.payload.chatroomId);
        const chatmessages = [...chatroom.chatMessages, action.payload.message];

        const newChatRoom = { ...chatroom };
        newChatRoom.chatMessages = chatmessages;

        const index = state.chatrooms.findIndex(room => room.id === action.payload.chatroomId);
        const chatroomArray = [...state.chatrooms];
        chatroomArray.splice(index, 1, newChatRoom);

            return {
                ...state,
                chatrooms: chatroomArray
            }

        default:
            return state;
    }
}


export default ChatReducer;