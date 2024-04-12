import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setWorkInfoAction } from "../actions/workInfoAction"
import { setWorkAction } from "../actions/workActions"

export const setWorkInfo = (info: object) => {
    return (dispatch: Dispatch<setWorkInfoAction>) => {
        dispatch({
            type: ActionType.INFO,
            payload: info
        })
    }
}