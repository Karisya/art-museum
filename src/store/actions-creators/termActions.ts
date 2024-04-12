import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setTermAction } from "../actions/termAction"

export const setTerm = (term: string) => {
    return (dispatch: Dispatch<setTermAction>) => {
        dispatch({
            type: ActionType.TERM,
            payload: term
        })
    }
}