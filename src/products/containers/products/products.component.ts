import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/* Store */
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss'],
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(
    private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    this.store.dispatch(new fromStore.LoadPizzas());
  }
}
