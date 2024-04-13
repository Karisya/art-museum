import { setIsLoadinghAction } from "../actions/isLoadingActions"


interface IState {
    isLoading: boolean,
}

const initialState = {
    isLoading: true,
}

export const isLoadingReducer = (state: IState = initialState, action: setIsLoadinghAction) => {
    switch (action.type) {
        case 'setIsLoading':
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}