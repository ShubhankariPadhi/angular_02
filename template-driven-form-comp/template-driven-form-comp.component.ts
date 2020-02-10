import { Component, OnInit } from '@angular/core';
import {MyserviceServiceService} from './myservice-service.service';

@Component({
  selector: 'app-template-driven-form-comp',
  templateUrl: './template-driven-form-comp.component.html',
  styleUrls: ['./template-driven-form-comp.component.css']
})
export class TemplateDrivenFormCompComponent implements OnInit {
  title = 'Angular 7 Project!';
  constructor(private myservice: MyserviceServiceService) { }
  ngOnInit() { }
  onClickSubmit(data) {
    alert('Entered Email id : ' + data.emailid);
  }

}
