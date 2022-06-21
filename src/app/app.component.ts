import { Component } from "@angular/core";

@Component({
  selector: "app-root", // name of the app component.Shows up in our HTML as <aap-root></app-root>
  templateUrl: "./app.component.html",

})
export class AppComponent {
  now = new Date();


}
