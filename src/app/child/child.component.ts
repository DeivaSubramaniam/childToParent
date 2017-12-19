import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

childMessage = 'Hi Appa';
nextMessage = 'How are You Appa?';
@Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessage() {
    this.messageEvent.emit(this.childMessage);
  }
}
