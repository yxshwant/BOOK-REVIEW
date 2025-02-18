

import user from 'reducers/userReducer'
import * as actions from 'constants/actionTypes'

describe('reducers', () => {
    describe('user', () => {

        const INITIAL_STATE = {
            userName: "",
            userId: ""
        }
        const STATE = {
            userName: "user 1",
            userId: "1"
        }
        
        it('provide the initial state', () => {
            expect(user(undefined, {})).toEqual(INITIAL_STATE)
        })

        it('handle AUTH_USER action', () => {
            expect(user(INITIAL_STATE, {
                type: actions.AUTH_USER, payload: {
                    user_name: "user 1",
                    user_id: "1"
                }
            })).toEqual(STATE)
        })


    })
})
