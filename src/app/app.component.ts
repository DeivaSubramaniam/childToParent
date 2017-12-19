import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  cMessage: string;
  cNMessage: string;
  @ViewChild(ChildComponent) child;
  ngAfterViewInit() {
    this.cNMessage = this.child.nextMessage;
  }
  receiveMessage($event) {
    this.cMessage = $event;
  }

}
