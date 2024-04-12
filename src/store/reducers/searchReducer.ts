import { setSearchAction } from "../actions/searchActions"

interface IState {
    search: boolean,
}

const initialState = {
    search: false,
}

export const searchReducer = (state: IState = initialState, action: setSearchAction) => {
    switch (action.type) {
        case 'setSearch':
            return { ...state, term: action.payload }
        default:
            return state
    }
}