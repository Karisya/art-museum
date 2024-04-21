// import { createStore } from "redux";
import { applyMiddleware, combineReducers, createStore } from "redux"
import { termReducer } from "./reducers/termReducer"
import { worksReducer } from "./reducers/worksReducer";
import { thunk } from "redux-thunk";
import { searchReducer } from "./reducers/searchReducer";
import { artworkDataReducer } from "./reducers/artworkDataReducer";
import { isLoadingReducer } from "./reducers/isLoadingReducer";
import { allWorksReducer } from "./reducers/allWorksReducer";
import { isFavoritesReducer } from "./reducers/isFavoritesReducer";
import { currentPageReducer } from "./reducers/currentPageReducer";
import { windowWidthReducer } from "./reducers/windowWidthReducer";
import { itemsPerPageReducer } from "./reducers/itemsPerPageReducer";
import { artworkReducer } from "./reducers/artworkReducer";
import { FavoritesReducer } from "./reducers/favoritesReducer";
import { paginationReducer } from "./reducers/paginationReducer";

const reducers = combineReducers({
    term: termReducer,
    works: worksReducer,
    search: searchReducer,
    data: artworkDataReducer,
    isLoading: isLoadingReducer,
    all: allWorksReducer,
    isFavorites: isFavoritesReducer,
    page: currentPageReducer,
    width: windowWidthReducer,
    perPage: itemsPerPageReducer,
    artwork: artworkReducer,
    favorites: FavoritesReducer,
    pagination:paginationReducer,
})

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default store
