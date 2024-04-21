import { setArtworkAction } from "../actions/artworkAction"

interface IState {
    artwork: object,
}

const initialState = {
    artwork: [],
}

export const artworkReducer = (state: IState = initialState, action: setArtworkAction) => {
    switch (action.type) {
        case 'setArtwork':
            return { ...state, artwork: action.payload }
        default:
            return state
    }
}