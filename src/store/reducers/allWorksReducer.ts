import { setAllWorksAction } from "../actions/allWorksAction"

interface IState {
    all: object[],
}

const initialState = {
    all: [],
}

export const allWorksReducer = (state: IState = initialState, action: setAllWorksAction) => {
    switch (action.type) {
        case 'setAllWorks':
            return { ...state, all: action.payload }
        default:
            return state
    }
}