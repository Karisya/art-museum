import { setWorkInfoAction } from "../actions/workInfoAction"

interface IState {
    info: object,
}

const initialState = {
    info: {},
}

export const workInfoReducer = (state: IState = initialState, action: setWorkInfoAction) => {
    switch (action.type) {
        case 'setWorkInfo':
            return { ...state, info: action.payload }
        default:
            return state
    }
}