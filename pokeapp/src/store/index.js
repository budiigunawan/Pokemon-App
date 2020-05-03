import {createStore,combineReducers,applyMiddleware} from 'redux'
import pokemonReducer from './reducers/pokemonReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({pokemonReducer})
const store = createStore(reducers, applyMiddleware(thunk));

export default store