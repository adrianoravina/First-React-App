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

export const newChat = (newChat) => {
    return {type: NEW_CHAT, payload: newChat}
}