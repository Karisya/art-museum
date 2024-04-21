import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setItemPerPageAction } from "../actions/itemsPerPageAction"

export const setItemsPerPage = (perPage: number) => {
    return (dispatch: Dispatch<setItemPerPageAction>) => {
        dispatch({
            type: ActionType.PERPAGE,
            payload: perPage
        })
    }
}