import * as actionTypes from 'constants/actionTypes'

export const authenticateUser = (username) => (dispatch, getState) => {

    fetch('/api/user/add', {
        method: 'POST',
        body: JSON.stringify({
            user_name: username,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleError)
        .then((response) => response.json())
        .then((items) => {
            dispatch({
                type: actionTypes.AUTH_USER,
                payload: items
            });
        })
        .catch(error => {
            dispatch(dispatchError(error))
        })

}


const handleError = (response) => {
    if (response.status === 500 || response.status === 400) {
        return response.json().then(err => { throw err; });
    }
    else if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}

const dispatchError = (error) => (dispatch) => {
    dispatch({
        type: actionTypes.ERROR_OCCURED,
        payload: error
    });
}
