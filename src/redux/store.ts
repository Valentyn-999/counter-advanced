import {combineReducers, createStore} from 'redux';
import { CounterReducer } from './counter-reducer';


const rootReducer = combineReducers({
    counter: CounterReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;