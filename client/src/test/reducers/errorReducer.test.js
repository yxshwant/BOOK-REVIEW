import error from 'reducers/errorReducer'
import * as actions from 'constants/actionTypes'

describe('reducers', () => {
    describe('error', () => {

        const INITIAL_STATE = {
            error: null
        }

        const STATE = {
            error: {
                error: "validation error",
                detail: "book isbn required"
            }
        }

        it('provide the initial state', () => {
            expect(error(undefined, {})).toEqual(INITIAL_STATE)
        })

        it('handle ERROR_OCCURED action', () => {
            expect(error(INITIAL_STATE, {
                type: actions.ERROR_OCCURED, payload: {
                    error: "validation error",
                    detail: "book isbn required"
                }
            })).toEqual(STATE)
        })


    })
})

