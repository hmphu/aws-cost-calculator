import reducerLocationList from './reducer-dropdown-list'

export default function(state = reducerLocationList()[0].id , action) {
	switch(action.type) {
		case 'LOCATION_SELECTED' : {
			return action.payload
		}	
	}
	return state;
}