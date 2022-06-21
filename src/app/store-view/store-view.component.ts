import { tap } from 'rxjs/operators';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { LicensePlate } from 'app/license-plate';
import { LicensePlateService } from 'app/license-plate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent {

  licensePlates$: Observable<LicensePlate[]>;


showPopup =false;
  constructor(service: LicensePlateService, private cartService: CartService) {
    this.licensePlates$ = service.getList()
      .pipe(
        tap(data => console.log(data))
      );
  }
  addToCart(plate:LicensePlate){
    this.cartService.addToCart(plate).subscribe(response => this.showPopup = true);
  }



  ngOnInit(): void {
  }

}
