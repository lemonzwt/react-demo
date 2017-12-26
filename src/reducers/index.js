import {
    combineReducers
} from 'redux'
import Users from './users'
export default combineReducers({
    ...Users
});