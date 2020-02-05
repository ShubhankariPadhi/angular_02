import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sea',
  templateUrl: './sea.component.html',
  styleUrls: ['./sea.component.css']
})
export class SeaComponent implements OnInit {
@Output() receiveOp;

  constructor() { }
  seaVariable = this.receiveOp;
  ngOnInit() {
  }
}
