import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setWindowWidthAction } from "../actions/windowWidthAction"

export const setWindowWidth = (width: number) => {
    return (dispatch: Dispatch<setWindowWidthAction>) => {
        dispatch({
            type: ActionType.WINDOW,
            payload: width
        })
    }
}