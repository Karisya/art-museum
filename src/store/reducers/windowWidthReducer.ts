import { setWindowWidthAction } from "../actions/windowWidthAction"

interface IState {
    width: number,
}

const initialState = {
    width: window.innerWidth,
}

export const windowWidthReducer = (state: IState = initialState, action: setWindowWidthAction) => {
    switch (action.type) {
        case 'setWindowWidth':
            return { ...state, width: action.payload }
        default:
            return state
    }
}