import { setPaginationAction } from "../actions/paginationAction"

interface IState {
    pagination: boolean,
}

const initialState = {
    pagination: true,
}

export const paginationReducer = (state: IState = initialState, action: setPaginationAction) => {
    switch (action.type) {
        case 'setPagination':
            return { ...state, pagination: action.payload }
        default:
            return state
    }
}