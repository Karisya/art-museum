import { ActionType } from "../actions-type"
import { setFavoritesAction } from "../actions/favoritesAction"
import { deleteFavoritesAction } from "../actions/favoritesAction"
interface Favorite {
    id: number;
    // Другие свойства вашего объекта в favorites, если они есть
}

interface IState {
    favorites: Favorite[],
    id: number | null,
}

const initialState: IState = {
    favorites: [],
    id: null,
}

export const FavoritesReducer = (state: IState = initialState, action: setFavoritesAction | deleteFavoritesAction) => {
    switch (action.type) {
        case ActionType.FAVORITES:
            return { ...state, favorites: action.payload }
        case ActionType.DELETE_FAVORITE:
            // При действии ActionType.DELETE_FAVORITE удаляем избранное по идентификатору
            const updatedFavorites = state.favorites.filter((item) => item.id !== action.payload);
            // Сохраняем обновленные избранные в локальное хранилище
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return { ...state, favorites: updatedFavorites };
        default:
            return state
    }
}