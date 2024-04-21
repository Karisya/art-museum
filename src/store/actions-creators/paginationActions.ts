import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setPaginationAction } from "../actions/paginationAction"

export const setPagination = (pagination: boolean) => {
    return (dispatch: Dispatch<setPaginationAction>) => {
        dispatch({
            type: ActionType.PAGINATION,
            payload: pagination
        })
    }
}