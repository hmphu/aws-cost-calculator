import {combineReducers} from 'redux';
import ReducerDropdown from './reducer-dropdown-list';
import ReducersResource from './reducers-resource';
import ReducerActiveLocation from './reducer-active-location';
import ReducerHeaderTitle from './reducer-header-titles';

const rootReducer = combineReducers({
	dropdown:ReducerDropdown,
	resource: ReducersResource,
	active: ReducerActiveLocation,
	headerTitle: ReducerHeaderTitle
})

export default rootReducer;