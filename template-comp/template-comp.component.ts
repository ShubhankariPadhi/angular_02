import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-comp',
  templateUrl: './template-comp.component.html',
  styleUrls: ['./template-comp.component.css']
})
export class TemplateCompComponent implements OnInit {
  title = 'Angular 7';

  /* declared array of months. */
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  isavailable = false; // variable is set to true

  myClickFunction(event) {
    /*just added console.log which will display the event details in browser on click of the button. */
    alert('Button is clicked');
    console.log(event);
  }
  changemonths(event) {
    alert('Changed month from the Dropdown');
  }
  constructor() { }

  ngOnInit() {
  }

}
