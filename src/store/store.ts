// import { createStore } from "redux";
import { applyMiddleware,combineReducers, createStore } from "redux"
import { termReducer } from "./reducers/termReducer"
import { worksReducer } from "./reducers/worksReducer";
import { thunk } from "redux-thunk";
import { searchReducer } from "./reducers/searchReducer";
import { workInfoReducer } from "./reducers/workInfoReducer";

const reducers = combineReducers({
    term: termReducer,
    works: worksReducer,
    search: searchReducer,
    info: workInfoReducer,
})

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default store
