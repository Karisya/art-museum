import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setArtworkDataAction } from "../actions/actworkDataAction"

export const setArtworkData = (data: object[]) => {
    return (dispatch: Dispatch<setArtworkDataAction>) => {
        dispatch({
            type: ActionType.DATA,
            payload: data
        })
    }
}