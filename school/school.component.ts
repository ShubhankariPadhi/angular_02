import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {StudentComponent} from './student/student.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent  {

@ViewChild(StudentComponent, {static: true}) child: StudentComponent;
childMessage1 = 'parent message' ;

  constructor() { }
/*
ngAfterViewInit() {
    this.childMessage = this.child.message;
}*/
  check() {
    console.log(this.child.msg);
    this.childMessage1 = this.child.msg;
  }
}
