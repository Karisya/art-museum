import { Dispatch } from "redux"
import { ActionType } from "../actions-type"
import { setIsLoadinghAction } from "../actions/isLoadingActions"

export const setIsLoading = (search: boolean) => {
    return (dispatch: Dispatch<setIsLoadinghAction>) => {
        dispatch({
            type: ActionType.LOADING,
            payload: search
        })
    }
}