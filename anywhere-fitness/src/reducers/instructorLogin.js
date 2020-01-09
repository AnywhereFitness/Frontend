import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from "../actions";

const initialState = {
    error: "",
    loggingIn: false,
    loggedIn: false,
    user: ""
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: "",
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: "",
                loggingIn: false,
                loggedIn: true,
                user: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state;
    }
};