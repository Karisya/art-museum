import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setWorkAction } from "../actions/workActions"

export const setWorks = (works: object[]) => {
    return (dispatch: Dispatch<setWorkAction>) => {
        dispatch({
            type: ActionType.WORK,
            payload: works
        })
    }
}