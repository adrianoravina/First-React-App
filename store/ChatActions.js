import User from './../models/User';
import ChatMessage from './../models/ChatMessage';

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const ADD_TO_TEST = 'ADD_TO_TEST';
export const NEW_CHAT = 'NEW_CHAT';

export const toggleHappy = (happy) => {
    return {type: TOGGLE_HAPPY, payload: happy};
};

export const addToTest = (text) => {
    console.log("text " + text);
    return {type: ADD_TO_TEST, payload: text};
};

export const addToChat = (text, chatroomId) => {

    const tempUser = new User('1','Felix Sandgren', '1234', 'felix@sandgren.dk', '', 'MSc in Medicine', true);
    const message = new ChatMessage(Math.random().toString(), new Date(), text, tempUser);

    return {type: NEW_CHAT, payload: {message, chatroomId}}
}