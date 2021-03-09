import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  firstname: string = "Darshit"
  lastname: string = "Shekhda";
  fullname: string;

  columnSpan: number = 4;

  pageHeader: string = 'Student Details';
  FirstName: string = 'Darshit';
  LastName: string = 'Shekhda';
  Branch: string = 'CSE';
  Mobile: number = 9876543210;
  Gender: string = 'Male';
  Age: number = 21;

  name = '';  

  fullName: string;    

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(x) {  
    
    this.name += x.target.value;  
  }  

}
