import { combineReducers } from 'redux'
import user from 'reducers/userReducer'
import book from 'reducers/bookReducer'
import error from 'reducers/errorReducer'

const rootReducer = combineReducers({
  user,
  book,
  error
})

export default rootReducer
