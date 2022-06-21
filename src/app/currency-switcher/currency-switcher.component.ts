import { CurrencyService } from './../currency.service';
import { Component } from '@angular/core';
import {Currency} from './currency';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;

  constructor(public service: CurrencyService) {}

  changeCurrency(currency: Currency): void {
    this.service.setCurrency(currency);
    this.showItems = false; //will close the dropdown as i select the currency
  }
}
