import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupWindowComponent implements OnInit {

  @Input()
  isOpen = false;

  @Input()
  title = "Title";

  @Output()
  onClose = new EventEmitter<string>();

  //to test a lifecycle hook:
  constructor(){
    console.log('CONSTRUCTOR');
  }

  ngOnInit(): void {
    console.log('NG ON INIT');
  }

  ngOnChanges(simpleChanges: SimpleChanges){
    console.log('NG ON CHANGES;', simpleChanges );
  }

  closePopup(): void {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
}
