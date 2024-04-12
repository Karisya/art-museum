import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setSearchAction } from "../actions/searchActions"

export const setSearch = (search: boolean) => {
    return (dispatch: Dispatch<setSearchAction>) => {
        dispatch({
            type: ActionType.SEARCH,
            payload: search
        })
    }
}