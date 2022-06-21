import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from './currency-switcher/currency';

interface  ExchangeRates {
  EUR: number;
  GBP: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

private currency : Currency = 'USD'; //property currency of type Currency initialized with a 'USD' default value
rates: ExchangeRates;
//add getter and setter for that property
// USE lowercase  as ALWAYS to refer to the type and Uppercase as to refer stringe function in JS

constructor(http: HttpClient){
  http.get<ExchangeRates>('http://localhost:8000/rates')
  .subscribe(rates => this.rates = rates);
  //this is gonna make a request, get the exchange rates and store them in the object (rates:Exchange rate)
}

getExchangeRate():number{
 return this.rates[this.currency] || 1; // defining exchange rate for USD TO 1 ( || 1)
}


getCurrency():Currency {
    return this.currency;
  }

  setCurrency(curr:Currency){
    this.currency =curr;
  }

}
