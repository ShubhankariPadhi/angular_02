import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-comp',
  templateUrl: './employee-comp.component.html',
  styleUrls: ['./employee-comp.component.css']
})
export class EmployeeCompComponent implements OnInit {
@Input() employeeMessageReceiver;
  constructor() { }

  ngOnInit() {
  }

}
