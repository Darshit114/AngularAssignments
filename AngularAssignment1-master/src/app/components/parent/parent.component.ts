import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMsg: string = "Hello from parent!!";

  childMessages: string[] = ['Msg_1', 'Msg_2'];

  constructor() { }

  ngOnInit(): void {
  }

  addMsg(msg: string) {
    this.childMessages.push(msg)
  }

}
