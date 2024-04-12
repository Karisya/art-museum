import { setWorkAction } from "../actions/workActions"

interface IState {
    works: object[],
}

const initialState = {
    works: [],
}

export const worksReducer = (state: IState = initialState, action: setWorkAction) => {
    switch (action.type) {
        case 'setWorks':
            return { ...state, works: action.payload }
        default:
            return state
    }
}