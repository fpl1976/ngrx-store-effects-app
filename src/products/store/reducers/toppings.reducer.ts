import * as fromToppings from '../actions/toppings.actions';
import { Topping } from '../../models/topping.model';

export interface ToppingsState {
    entities: { [id: number]: Topping },
    loading: boolean;
    loaded: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingsState = {
    entities: {},
    loading: false,
    loaded: false,
    selectedToppings: []
};

export function reducer(
    state: ToppingsState = initialState,
    action: fromToppings.ToppingsAction): ToppingsState {

    switch (action.type) {
        case fromToppings.LOAD_TOPPINGS:
            return { ...state, loading: true };

        case fromToppings.LOAD_TOPPINGS_FAIL:
            return { ...state, loading: false, loaded: false };

        case fromToppings.LOAD_TOPPINGS_SUCCESS: {
            const toppings = (<fromToppings.LoadToppingsSuccess>action).payload;
            const entities = toppings.reduce((entities: { [id: number]: Topping }, topping: Topping) => {
                return {
                    ...entities,
                    [topping.id]: topping
                };
            }, { ...state.entities });

            return {
                ...state,
                loaded: true,
                loading: false,
                entities
            };
        }

        case fromToppings.VISUALIZE_TOPPINGS: {
            const selectedToppings = (<fromToppings.VisualizeToppings>action).payload;

            return {
                ...state,
                selectedToppings
            };
        }
    }

    return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
