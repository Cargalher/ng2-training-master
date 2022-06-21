import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {
  @Input()
  title: string;
  
  @Input()
  description:string;

  constructor() { }

}

// constructor() {
//   // here i am assigning the name of what i wanto to show
//   this.name = 'Angular';
// }
