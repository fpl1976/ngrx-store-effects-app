import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

import * as fromStore from '../../store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'product-item',
  templateUrl: 'product-item.component.html',
  styleUrls: ['product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;
  visualize$: Observable<Pizza>;

  constructor(
    private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza)
      .pipe(
        tap((pizza: Pizza = null) => { 
          const pizzaExists = !!(pizza && pizza.toppings); 
          const toppings = pizzaExists ? pizza.toppings.map(t => t.id) : [];
          this.store.dispatch(new fromStore.VisualizeToppings(toppings));
        })
      );

    this.toppings$ = this.store.select(fromStore.getAllToppings);
    this.visualize$ = this.store.select(fromStore.getPizzaVisualized);
  }

  onSelect(event: number[]) {
    this.store.dispatch(new fromStore.VisualizeToppings(event));
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new fromStore.CreatePizza(event));
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new fromStore.UpdatePizza(event));
  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
    }
  }
}
