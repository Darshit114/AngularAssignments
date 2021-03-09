import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMsgReciever: string;

  @Output() msgFromChild = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  sendMsg(msg: string) {
    this.msgFromChild.emit(msg);
  }
}
