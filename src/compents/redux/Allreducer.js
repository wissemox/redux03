import {reducer} from '../redux/reduce'
import {combineReducers} from 'redux'
import {reducer02} from './reducers'
 const AllReducers=combineReducers({
    reducer,
    reducer02
})
export default AllReducers