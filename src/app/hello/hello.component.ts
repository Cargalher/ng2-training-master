import { Component, Input } from '@angular/core';

@Component({ //component decorator.In order to use this decorator we have to import it
  selector: 'app-hello',  //name of the HTML element.
  //HTML SYNTAX.Use backticks always.the info we render is define in the class itself
  template: `
    <div>
    <h2>Hello {{firstName}} {{name}}</h2> <!-- or also: Hello {{firstName + ' ' + name}}  -->
    <!-- Data binding, means that the expression is always gonna be updated whenever we change the value of this.name -->
      <!-- {{}} is an angular interpolation -->
      <!--  it will render Hello Angular -->
    </div>
  `
})
export class HelloComponent {
  @Input()
  name: string; //property:type;
  @Input()
  firstName='Carmen';
  constructor() {
    // here i am assigning the name of what i wanto to show
    this.name = 'Angular';
  }


}
