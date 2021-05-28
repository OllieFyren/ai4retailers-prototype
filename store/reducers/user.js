import { LOG_IN, REGISTER } from '../actions/user'

const initialState = {
    isLoggedIn: false,
    userId: '',
    registerSuccess: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                userId: action.userId,
                isLoggedIn: action.isLoggedIn,
            };
        case REGISTER:
            return {
                ...state,
                registerSuccess: action.registerSuccess
            }
    }
    return state;
};