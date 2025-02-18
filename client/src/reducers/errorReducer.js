import * as actionTypes from 'constants/actionTypes';

const initialState = {
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ERROR_OCCURED:
            return { ...state, error: action.payload };
        default:
            return { ...state, error: null };

    }
}
