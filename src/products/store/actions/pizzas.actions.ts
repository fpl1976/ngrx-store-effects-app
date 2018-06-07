import { Action, UPDATE } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

// Load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
    readonly type: string = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type: string = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) { }
}

export class LoadPizzasSuccess implements Action {
    readonly type: string = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) { }
}

// Create pizza
export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';

export class CreatePizza implements Action {
    readonly type: string = CREATE_PIZZA;
    constructor(public payload: Pizza) { }
}

export class CreatePizzaFail implements Action {
    readonly type: string = CREATE_PIZZA_FAIL;
    constructor(public payload: any) { }
}

export class CreatePizzaSuccess implements Action {
    readonly type: string = CREATE_PIZZA_SUCCESS;
    constructor(public payload: Pizza) { }
}

// Update pizza
export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizza Fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';

export class UpdatePizza implements Action {
    readonly type: string = UPDATE_PIZZA;
    constructor(public payload: Pizza) { }
}

export class UpdatePizzaFail implements Action {
    readonly type: string = UPDATE_PIZZA_FAIL;
    constructor(public payload: any) { }
}

export class UpdatePizzaSuccess implements Action {
    readonly type: string = UPDATE;
    constructor(public payload: Pizza) { }
}

// Action types
export type PizzasAction =
    | LoadPizzas
    | LoadPizzasFail
    | LoadPizzasSuccess
    | CreatePizza
    | CreatePizzaFail
    | CreatePizzaSuccess
    | UpdatePizza
    | UpdatePizzaFail
    | UpdatePizzaSuccess;
