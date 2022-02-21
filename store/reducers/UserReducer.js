import { SAVE_USER } from './../UserActions';

const initialState = {
    user_email: ""
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case SAVE_USER: 
            console.log("reducer "+ action.payload);
            
            return {
                ...state,
                user: [...state.user_email, action.payload]
            }

        default:
            return state;
    }
}


export default UserReducer;