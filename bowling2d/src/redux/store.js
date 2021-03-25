/* configuracion del storage de los datos */
import nameReducer from './reducer.js';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({
  namesTables: nameReducer,

});

export default function configureStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}