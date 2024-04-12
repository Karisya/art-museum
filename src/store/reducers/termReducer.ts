import { setTermAction } from "../actions/termAction"

interface IState {
    term: string,
}

const initialState = {
    term: '',
}

export const termReducer = (state: IState = initialState, action: setTermAction) => {
    switch (action.type) {
        case 'setTerm':
            return { ...state, term: action.payload }
        default:
            return state
    }
}