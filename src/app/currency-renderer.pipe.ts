import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(value: number, currency : string = 'USD', exchangeRate: number = 1): string {
    return new CurrencyPipe('en-US')
    .transform(value / exchangeRate, currency, 'symbol', '1.0-2');
  }

}
