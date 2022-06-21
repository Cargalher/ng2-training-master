import { CurrencyService } from './../currency.service';
import { Component, EventEmitter, Input, Output} from "@angular/core";
import { LicensePlate } from "../license-plate";

@Component({
  selector: "app-license-plate",
  templateUrl: "./license-plate.component.html",
  styleUrls: ["./license-plate.component.css"],
})
export class LicensePlateComponent {
  @Input()
  plate: LicensePlate;

  @Input()
  buttonText: string;

  @Output()
  buttonClick:EventEmitter<LicensePlate> = new EventEmitter<LicensePlate>();

  constructor(public service:CurrencyService) {}

  buttonClicked() {
    this.buttonClick.emit(this.plate);
  }
  //This code defines an output called buttonClick. The app.component is going to be able to listen to such output
  //  in order to get notified when a license plate gets clicked. We emit that plate object so the parent component knows
  //  which license plate was clicked on.

}
