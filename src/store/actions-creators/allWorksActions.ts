import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setAllWorksAction } from "../actions/allWorksAction"

export const setAllWorks = (all: object[]) => {
    return (dispatch: Dispatch<setAllWorksAction>) => {
        dispatch({
            type: ActionType.ALL,
            payload: all
        })
    }
}