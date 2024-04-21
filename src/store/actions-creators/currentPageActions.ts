import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setCurrentPageAction } from "../actions/currentPageAction"

export const setCurrentPage = (page: number) => {
    return (dispatch: Dispatch<setCurrentPageAction>) => {
        dispatch({
            type: ActionType.PAGE,
            payload: page
        })
    }
}