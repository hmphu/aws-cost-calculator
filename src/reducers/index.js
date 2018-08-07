import {combineReducers} from 'redux';
import ReducerDropdown from './reducer-dropdown-list';
import ReducersResource from './reducers-resource';
import ReducerActiveLocation from './reducer-active-location'

const rootReducer = combineReducers({
	dropdown:ReducerDropdown,
	resource: ReducersResource,
	active: ReducerActiveLocation
})

export default rootReducer;