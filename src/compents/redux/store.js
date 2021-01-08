import {createStore} from 'redux'
import {reducer} from '../redux/reduce'
import AllReducers from './Allreducer'
export let store = createStore(AllReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())