import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {pokeReducer} from '../reducer/pokeReducer'

const rootReducer = combineReducers({
    pokemons: pokeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
