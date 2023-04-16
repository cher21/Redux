import ActionTypes from "../action/actionType";

const initialState = {
    users: [],
    message: '',
    refresh: '',
};


function userReducers(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case ActionTypes.GET_USERS_RESPONSE:
            return {state, users: payload, refresh: true};
        case ActionTypes.ADD_USER_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.UPDATE_USER_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.DEL_USER_RESPONSE:
            return {message: payload, refresh: false};
        default:
            return state
    }
}

export default userReducers