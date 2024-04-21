import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setArtworkAction } from "../actions/artworkAction"

export const setArtwork = (artwork: object) => {
    return (dispatch: Dispatch<setArtworkAction>) => {
        dispatch({
            type: ActionType.ARTWORK,
            payload: artwork
        })
    }
}