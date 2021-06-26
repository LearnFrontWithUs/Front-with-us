import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

export const rootReducer = combineReducers({

});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

