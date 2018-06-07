import { Injectable } from '@angular/core';
import { ToppingsService } from '../../services';

@Injectable()
export class ToppingsEffects {

    constructor(
        private toppingsService: ToppingsService) { }
}