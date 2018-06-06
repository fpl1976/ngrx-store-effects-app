import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

import * as fromStore from '../../store';

@Component({
  selector: 'product-item',
  templateUrl: 'product-item.component.html',
  styleUrls: ['product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise: Pizza;
  toppings: Topping[];

  constructor(
    private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza);
  }

  onSelect(event: number[]) {
    // let toppings;
    // if (this.toppings && this.toppings.length) {
    //   toppings = event.map(id =>
    //     this.toppings.find(topping => topping.id === id)
    //   );
    // } else {
    //   toppings = this.pizza.toppings;
    // }
    // this.visualise = { ...this.pizza, toppings };
  }

  onCreate(event: Pizza) {
  }

  onUpdate(event: Pizza) {
  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
    }
  }
}
