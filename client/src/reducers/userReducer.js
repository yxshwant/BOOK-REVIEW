import * as actionTypes from 'constants/actionTypes';

const initialState = {
    userName: "",
    userId: ""
}
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_USER:
            return { ...state, userName: action.payload.user_name, userId: action.payload.user_id };
        default:
            return { ...state };
    }
}
