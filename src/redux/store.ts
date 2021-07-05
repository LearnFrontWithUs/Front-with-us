import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {registrationReducer} from "./registrationReducer/registrationReducer";
import {loginReducer} from './loginReducer/loginReducer';

export const rootReducer = combineReducers({
    registr:registrationReducer,
    login:loginReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

