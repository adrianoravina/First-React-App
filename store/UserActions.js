

export const SAVE_USER = 'SAVE_USER';
export const ADD_TO_TEST = 'ADD_TO_TEST';
export const NEW_CHAT = 'NEW_CHAT';

export const saveUser = (email) => {
    return {type: SAVE_USER, payload: email};
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