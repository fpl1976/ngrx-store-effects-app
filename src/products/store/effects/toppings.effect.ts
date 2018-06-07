import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as toppingsActions from '../actions/toppings.actions';

import { Topping } from '../../models/topping.model';
import { ToppingsService } from '../../services';

@Injectable()
export class ToppingsEffects {

    constructor(
        private toppingsService: ToppingsService,
        private actions$: Actions) { }

        @Effect()
        loadToppings$ = this.actions$.ofType(toppingsActions.LOAD_TOPPINGS)
            .pipe(
                switchMap(() => this.toppingsService.getToppings()
                    .pipe(
                        map((toppings: Topping[]) => new toppingsActions.LoadToppingsSuccess(toppings)),
                        catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
                    ))  
            );


}