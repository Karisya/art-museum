import { setItemPerPageAction } from "../actions/itemsPerPageAction"

interface IState {
    perPage: number,
}

const initialState = {
    perPage: 3,
}

export const itemsPerPageReducer = (state: IState = initialState, action: setItemPerPageAction) => {
    switch (action.type) {
        case 'setItemsPerPage':
            return { ...state, perPage: action.payload }
        default:
            return state
    }
}