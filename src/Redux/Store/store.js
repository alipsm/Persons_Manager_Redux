import { applyMiddleware, createStore,compose } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from './../Reducer/index'

export const store=createStore(
    rootReducer,
    compose(

        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );
store.subscribe(()=>console.log(store.getState()))