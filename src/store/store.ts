// import { createStore } from "redux";
import { applyMiddleware, combineReducers, createStore } from "redux"
import { termReducer } from "./reducers/termReducer"
import { worksReducer } from "./reducers/worksReducer";
import { thunk } from "redux-thunk";
import { searchReducer } from "./reducers/searchReducer";
import { artworkDataReducer } from "./reducers/artworkDataReducer";
import { isLoadingReducer } from "./reducers/isLoadingReducer";

const reducers = combineReducers({
    term: termReducer,
    works: worksReducer,
    search: searchReducer,
    data: artworkDataReducer,
    isLoading: isLoadingReducer,
})

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default store
