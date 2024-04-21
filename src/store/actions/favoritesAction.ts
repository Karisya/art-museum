import { ActionType } from "../actions-type"

export type setFavoritesAction = {
    type: ActionType.FAVORITES,
    payload: object[]
}

export type deleteFavoritesAction = {
    type: ActionType.DELETE_FAVORITE,
    payload: number
}


