import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setIsFavoriteshAction } from "../actions/isFavoritesAction"

export const setIsFavorites = (search: boolean) => {
    return (dispatch: Dispatch<setIsFavoriteshAction>) => {
        dispatch({
            type: ActionType.ISFAVORITES,
            payload: search
        })
    }
}