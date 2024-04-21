import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setFavoritesAction } from "../actions/favoritesAction"
import { deleteFavoritesAction } from "../actions/favoritesAction"

export const setFavorites = (favorites: object[]) => {
    return (dispatch: Dispatch<setFavoritesAction>) => {
        dispatch({
            type: ActionType.FAVORITES,
            payload: favorites
        })
    }
}

export const deleteFavorites = (id: number) => {
    return (dispatch: Dispatch<deleteFavoritesAction>) => {
        dispatch({
            type: ActionType.DELETE_FAVORITE,
            payload: id
        })
    }
}