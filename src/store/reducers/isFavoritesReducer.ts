import { setIsFavoriteshAction } from "../actions/isFavoritesAction"

interface IState {
    isFavorites: boolean,
}

const initialState = {
    isFavorites: false,
}

export const isFavoritesReducer = (state: IState = initialState, action: setIsFavoriteshAction) => {
    switch (action.type) {
        case 'setIsFavorites':
            return { ...state, isFavorites: action.payload }
        default:
            return state
    }
}