import { setArtworkDataAction } from "../actions/actworkDataAction"

interface IState {
    data: object[],
}

const initialState = {
    data: [],
}

export const artworkDataReducer = (state: IState = initialState, action: setArtworkDataAction) => {
    switch (action.type) {
        case 'setArtworkData':
            return { ...state, data: action.payload }
        default:
            return state
    }
}