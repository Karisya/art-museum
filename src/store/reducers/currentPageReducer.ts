import { setCurrentPageAction } from "../actions/currentPageAction"

interface IState {
    page: number,
}

const initialState = {
    page: 1,
}

export const currentPageReducer = (state: IState = initialState, action: setCurrentPageAction) => {
    switch (action.type) {
        case 'setCurrentPage':
            return { ...state, page: action.payload }
        default:
            return state
    }
}