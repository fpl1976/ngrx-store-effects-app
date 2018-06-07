import { Injectable } from "@angular/core";

import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as pizzaActions from '../actions/pizzas.actions';
import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services';

@Injectable()
export class PizzasEffects {

    constructor(
        private actions$: Actions,
        private pizzaService: PizzasService) { }

    @Effect()
    loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
        .pipe(
            switchMap(() => this.pizzaService.getPizzas()
                .pipe(
                    map((pizzas: Pizza[]) => new pizzaActions.LoadPizzasSuccess(pizzas)),
                    catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
                ))
        );

    @Effect()
    createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA)
        .pipe(
            map((action: pizzaActions.CreatePizza) => action.payload),
            switchMap((pizza: Pizza) => this.pizzaService.createPizza(pizza)
                .pipe(
                    map((pizza: Pizza) => new pizzaActions.CreatePizzaSuccess(pizza)),
                    catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
                ))

        );

    @Effect()
    updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA)
        .pipe(
            map((action: pizzaActions.UpdatePizza) => action.payload),
            switchMap((pizza: Pizza) => this.pizzaService.updatePizza(pizza)
                .pipe(
                    map((pizza: Pizza) => new pizzaActions.UpdatePizzaSuccess(pizza)),
                    catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
                ))
        );
}